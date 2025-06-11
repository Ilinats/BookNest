import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useApi } from '../hooks/useApi';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import Card from '../components/Card';
import LoadingScreen from '../components/LoadingScreen';
import { books, api } from '../services/api';

const PACE_OPTIONS = ['FAST', 'MEDIUM', 'SLOW'];
const FOCUS_OPTIONS = ['PLOT', 'CHARACTER', 'BOTH'];

export default function WriteReviewScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { user } = useApp();
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [pace, setPace] = useState('');
  const [focus, setFocus] = useState('');
  const [lovable, setLovable] = useState(false);
  const [contentWarnings, setContentWarnings] = useState('');
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [selectedTropes, setSelectedTropes] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [newMood, setNewMood] = useState('');
  const [newTrope, setNewTrope] = useState('');
  const [newGenre, setNewGenre] = useState('');

  const { data: book, loading: bookLoading, error: bookError, execute: fetchBook } = useApi(
    () => books.getById(id)
  );
  const { data: moods, loading: moodsLoading, error: moodsError, execute: fetchMoods } = useApi(
    () => api.get('/api/moods')
  );
  const { data: tropes, loading: tropesLoading, error: tropesError, execute: fetchTropes } = useApi(
    () => api.get('/api/tropes')
  );
  const { data: genres, loading: genresLoading, error: genresError, execute: fetchGenres } = useApi(
    () => api.get('/api/genres')
  );
  const { execute: createReview, loading: creatingReview } = useApi(
    (data) => api.post('/api/reviews', data)
  );
  const { execute: createMood } = useApi(
    (data) => api.post('/api/moods', data)
  );
  const { execute: createTrope } = useApi(
    (data) => api.post('/api/tropes', data)
  );
  const { execute: createGenre } = useApi(
    (data) => api.post('/api/genres', data)
  );

  useEffect(() => {
    fetchBook();
    fetchMoods();
    fetchTropes();
    fetchGenres();
  }, [id]);

  const handleCreateMood = async () => {
    if (!newMood.trim()) return;
    try {
      const mood = await createMood({ name: newMood.trim() });
      setNewMood('');
      fetchMoods();
      Alert.alert('Success', 'Mood created successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to create mood');
    }
  };

  const handleCreateTrope = async () => {
    if (!newTrope.trim()) return;
    try {
      const trope = await createTrope({ name: newTrope.trim() });
      setNewTrope('');
      fetchTropes();
      Alert.alert('Success', 'Trope created successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to create trope');
    }
  };

  const handleCreateGenre = async () => {
    if (!newGenre.trim()) return;
    try {
      const genre = await createGenre({ name: newGenre.trim() });
      setNewGenre('');
      fetchGenres();
      Alert.alert('Success', 'Genre created successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to create genre');
    }
  };

  const handleSubmitReview = async () => {
    console.log("User: ", user);
    if (!user || !user.data || !user.data.id) {
      Alert.alert('Error', 'You must be logged in to submit a review');
      router.push('/login');
      return;
    }

    if (!rating) {
      Alert.alert('Error', 'Please select a rating');
      return;
    }

    try {
      const reviewData = {
        userId: user.data.id,
        bookId: parseInt(id),
        rating: parseFloat(rating),
        text: text || '',
        pace: pace || null,
        focus: focus || null,
        lovable: lovable || false,
        contentWarnings: contentWarnings || '',
        moodIds: selectedMoods || [],
        tropeIds: selectedTropes || [],
        genreIds: selectedGenres || [],
      };

      console.log('Submitting review:', reviewData);
      await createReview(reviewData);
      Alert.alert('Success', 'Review submitted successfully');
      router.back();
    } catch (error) {
      console.error('Review submission error:', error);
      Alert.alert(
        'Error',
        error.response?.data?.message || 'Failed to submit review. Please try again.'
      );
    }
  };

  const [ratingText, setRatingText] = useState('');

  const getStarIcon = (starPosition, currentRating) => {
    const difference = currentRating - (starPosition - 1);
    
    if (difference >= 0.75) {
      return 'star';
    } else if (difference >= 0.5) {
      return 'star-half';
    } else if (difference >= 0.25) {
      return 'star-half';
    } else {
      return 'star-outline';
    }
  };

  const getStarOpacity = (starPosition, currentRating) => {
    const difference = currentRating - (starPosition - 1);
    
    if (difference >= 0.75) {
      return 1;
    } else if (difference >= 0.5) {
      return 1;
    } else if (difference >= 0.25) {
      return 0.5;
    } else {
      return 1;
    }
  };

  const handleRatingTextChange = (text) => {
    setRatingText(text);
    
    // Parse the text to get a numeric rating
    const numericRating = parseFloat(text);
    
    // Validate the rating (between 0 and 5, allow decimals)
    if (!isNaN(numericRating) && numericRating >= 0 && numericRating <= 5) {
      setRating(numericRating);
    } else if (text === '') {
      setRating(0);
    }
  };

  const renderRatingStars = () => {
    return (
      <View style={styles.ratingContainer}>
        <TextInput
          style={styles.ratingInput}
          placeholder="Enter rating (0-5, e.g., 4.25)"
          value={ratingText}
          onChangeText={handleRatingTextChange}
          keyboardType="decimal-pad"
          maxLength={4}
        />
        <View style={styles.starsRow}>
          {[1, 2, 3, 4, 5].map((star) => (
            <View key={star} style={styles.starContainer}>
              <Ionicons
                name={getStarIcon(star, rating)}
                size={32}
                color="#FFD700"
                style={{ opacity: getStarOpacity(star, rating) }}
              />
            </View>
          ))}
        </View>
        <View style={styles.ratingHelp}>
          <Text style={styles.ratingHelpText}>
            Enter your rating above (supports decimals like 3.5, 4.25, etc.)
          </Text>
        </View>
      </View>
    );
  };

  const renderOptionSelector = (options, selected, onSelect, title) => (
    <View style={styles.optionSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              selected === option && styles.selectedOption,
            ]}
            onPress={() => onSelect(option)}
          >
            <Text
              style={[
                styles.optionText,
                selected === option && styles.selectedOptionText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderTagSelector = (items, selected, onSelect, title, newItem, setNewItem, onCreate) => (
    <View style={styles.tagSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.tagInputContainer}>
        <TextInput
          style={styles.tagInput}
          placeholder={`Add new ${title.toLowerCase()}`}
          value={newItem}
          onChangeText={setNewItem}
        />
        <Button
          title="Add"
          onPress={onCreate}
          style={styles.addTagButton}
        />
      </View>
      <View style={styles.tagsContainer}>
        {items?.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.tag,
              selected.includes(item.id) && styles.selectedTag,
            ]}
            onPress={() => {
              if (selected.includes(item.id)) {
                onSelect(selected.filter(id => id !== item.id));
              } else {
                onSelect([...selected, item.id]);
              }
            }}
          >
            <Text
              style={[
                styles.tagText,
                selected.includes(item.id) && styles.selectedTagText,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  if (bookLoading || moodsLoading || tropesLoading || genresLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <LoadingScreen />
      </SafeAreaView>
    );
  }

  if (bookError || moodsError || tropesError || genresError) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Failed to load data</Text>
          <Button title="Try Again" onPress={() => {
            fetchBook();
            fetchMoods();
            fetchTropes();
            fetchGenres();
          }} />
        </View>
      </SafeAreaView>
    );
  }

  if (!book) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Book not found</Text>
          <Button title="Go Back" onPress={() => router.back()} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Card title={book?.title || 'Loading...'} subtitle={book?.author || ''}>
          <Text style={styles.bookInfo}>Write your review</Text>
        </Card>

        <View style={styles.ratingSection}>
          <Text style={styles.sectionTitle}>Rating</Text>
          {renderRatingStars()}
        </View>

        <View style={styles.reviewSection}>
          <Text style={styles.sectionTitle}>Review</Text>
          <TextInput
            style={styles.reviewInput}
            placeholder="Write your review..."
            value={text}
            onChangeText={setText}
            multiline
            numberOfLines={6}
          />
        </View>

        {renderOptionSelector(PACE_OPTIONS, pace, setPace, 'Pace')}
        {renderOptionSelector(FOCUS_OPTIONS, focus, setFocus, 'Focus')}

        <View style={styles.lovableSection}>
          <Text style={styles.sectionTitle}>Were the characters lovable?</Text>
          <TouchableOpacity
            style={[styles.lovableButton, lovable && styles.lovableButtonActive]}
            onPress={() => setLovable(!lovable)}
          >
            <Ionicons
              name={lovable ? 'heart' : 'heart-outline'}
              size={24}
              color={lovable ? '#FF3B30' : '#666'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.warningsSection}>
          <Text style={styles.sectionTitle}>Content Warnings</Text>
          <TextInput
            style={styles.warningsInput}
            placeholder="Add any content warnings..."
            value={contentWarnings}
            onChangeText={setContentWarnings}
            multiline
          />
        </View>

        {renderTagSelector(
          moods,
          selectedMoods,
          setSelectedMoods,
          'Moods',
          newMood,
          setNewMood,
          handleCreateMood
        )}

        {renderTagSelector(
          tropes,
          selectedTropes,
          setSelectedTropes,
          'Tropes',
          newTrope,
          setNewTrope,
          handleCreateTrope
        )}

        {renderTagSelector(
          genres,
          selectedGenres,
          setSelectedGenres,
          'Genres',
          newGenre,
          setNewGenre,
          handleCreateGenre
        )}

        <Button
          title="Submit Review"
          onPress={handleSubmitReview}
          loading={creatingReview}
          style={styles.submitButton}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  bookInfo: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  ratingSection: {
    marginBottom: 24,
  },
  ratingContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  ratingInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: '#fff',
  },
  starsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starContainer: {
    padding: 8,
  },
  ratingHelp: {
    marginTop: 8,
    paddingHorizontal: 20,
  },
  ratingHelpText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  reviewSection: {
    marginBottom: 24,
  },
  reviewInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    minHeight: 120,
    textAlignVertical: 'top',
  },
  optionSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  optionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 8,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  optionText: {
    color: '#666',
  },
  selectedOptionText: {
    color: '#fff',
  },
  lovableSection: {
    marginBottom: 24,
    alignItems: 'center',
  },
  lovableButton: {
    padding: 16,
    borderRadius: 30,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  lovableButtonActive: {
    borderColor: '#FF3B30',
  },
  warningsSection: {
    marginBottom: 24,
  },
  warningsInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  tagSection: {
    marginBottom: 24,
  },
  tagInputContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tagInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
  },
  addTagButton: {
    minWidth: 80,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 8,
    marginBottom: 8,
  },
  selectedTag: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  tagText: {
    color: '#666',
  },
  selectedTagText: {
    color: '#fff',
  },
  submitButton: {
    marginTop: 16,
    marginBottom: 32,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
});