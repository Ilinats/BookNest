import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { books } from '../services/api';
import { useApi } from '../hooks/useApi';
import { APP_CONFIG } from '../config';

export default function SearchScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [pageRange, setPageRange] = useState([0, APP_CONFIG.MAX_PAGES]);
  const [minRating, setMinRating] = useState(APP_CONFIG.MIN_RATING);
  const [maxRating, setMaxRating] = useState(APP_CONFIG.MAX_RATING);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedTropes, setSelectedTropes] = useState([]);
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const { execute: searchBooks, data, loading, error } = useApi(books.search);
  const { execute: fetchGenres, data: genresData, loading: loadingGenres } = useApi(books.getGenres);
  const { execute: fetchTropes, data: tropesData, loading: loadingTropes } = useApi(books.getTropes);
  const { execute: fetchMoods, data: moodsData, loading: loadingMoods } = useApi(books.getMoods);

  // Fetch filter options when component mounts
  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        await Promise.all([
          fetchGenres(),
          fetchTropes(),
          fetchMoods()
        ]);
      } catch (error) {
        console.error('Error fetching filter options:', error);
        Alert.alert(
          'Error',
          'Failed to load filter options. Please try again later.'
        );
      }
    };

    fetchFilterOptions();
  }, []);

  // Extract lists from API responses
  const genres = genresData?.genres || [];
  const tropes = tropesData?.tropes || [];
  const moods = moodsData?.moods || [];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, APP_CONFIG.SEARCH_DEBOUNCE_MS);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      handleSearch();
    }
  }, [debouncedQuery]);

  useEffect(() => {
    if (error) {
      console.error('Search error:', error);
      Alert.alert(
        'Search Error',
        'Failed to search books. Please check your search terms and try again.',
        [{ text: 'OK', style: 'default' }]
      );
    }
  }, [error]);

  const handleSearch = useCallback(async () => {
    if (!debouncedQuery.trim() && 
        selectedGenres.length === 0 && 
        selectedTropes.length === 0 && 
        selectedMoods.length === 0) {
      return;
    }

    try {
      const filters = {
        minPages: Math.round(pageRange[0]),
        maxPages: Math.round(pageRange[1]),
        minRating: parseFloat(minRating.toFixed(1)),
        maxRating: parseFloat(maxRating.toFixed(1)),
        genres: selectedGenres,
        tropes: selectedTropes,
        moods: selectedMoods,
      };

      await searchBooks(debouncedQuery, filters);
    } catch (error) {
      console.error('Search error:', error);
    }
  }, [debouncedQuery, pageRange, minRating, maxRating, selectedGenres, selectedTropes, selectedMoods, searchBooks]);

  const handleManualSearch = () => {
    if (!searchQuery.trim()) {
      Alert.alert('Error', 'Please enter a search query');
      return;
    }
    setDebouncedQuery(searchQuery);
  };

  const toggleFilter = (category, value) => {
    switch (category) {
      case 'genre':
        setSelectedGenres(prev => 
          prev.includes(value) 
            ? prev.filter(g => g !== value)
            : [...prev, value]
        );
        break;
      case 'trope':
        setSelectedTropes(prev => 
          prev.includes(value) 
            ? prev.filter(t => t !== value)
            : [...prev, value]
        );
        break;
      case 'mood':
        setSelectedMoods(prev => 
          prev.includes(value) 
            ? prev.filter(m => m !== value)
            : [...prev, value]
        );
        break;
    }
  };

  const renderFilterChips = (items, selectedItems, category) => (
    <View style={styles.filterChipsContainer}>
      {items.map((item) => (
        <TouchableOpacity
          key={item}
          style={[
            styles.filterChip,
            selectedItems.includes(item) && styles.filterChipSelected
          ]}
          onPress={() => toggleFilter(category, item)}
        >
          <Text style={[
            styles.filterChipText,
            selectedItems.includes(item) && styles.filterChipTextSelected
          ]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderFilterSection = (title, items, selectedItems, category, loading) => (
    <View style={styles.filterSection}>
      <Text style={styles.filterTitle}>{title}</Text>
      {loading ? (
        <ActivityIndicator size="small" color="#007AFF" style={styles.filterLoading} />
      ) : items.length > 0 ? (
        renderFilterChips(items, selectedItems, category)
      ) : (
        <Text style={styles.noFiltersText}>No {title.toLowerCase()} available</Text>
      )}
    </View>
  );

  // Extract books from response
  const searchResults = data?.books || [];

  const renderBook = ({ item }) => (
    <TouchableOpacity
      style={styles.bookCard}
      onPress={() => router.push(`/book/${item.id}`)}>
      <View style={styles.coverContainer}>
        {item.coverUrl ? (
          <Image 
            source={{ uri: item.coverUrl }} 
            style={styles.coverImage}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.coverPlaceholder}>
            <Ionicons name="book" size={40} color="#666" />
          </View>
        )}
      </View>
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.bookAuthor} numberOfLines={1}>{item.author}</Text>
        <View style={styles.metaInfo}>
          {item.pages && (
            <Text style={styles.pageCount}>{item.pages} pages</Text>
          )}
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>
              {item.averageRating ? item.averageRating.toFixed(1) : 'N/A'}
            </Text>
            <Text style={styles.reviewCount}>
              ({item._count?.reviews || 0} reviews)
            </Text>
          </View>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#666" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by title, author, genre, trope, or mood..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleManualSearch}
            returnKeyType="search"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity
              onPress={() => {
                setSearchQuery('');
                setDebouncedQuery('');
              }}
              style={styles.clearButton}>
              <Ionicons name="close-circle" size={20} color="#666" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setShowFilters(!showFilters)}>
          <Ionicons 
            name={showFilters ? "chevron-up" : "chevron-down"} 
            size={24} 
            color="#007AFF" 
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.addBookButton}
        onPress={() => router.push('/books/add')}>
        <Ionicons name="add-circle" size={24} color="#007AFF" />
        <Text style={styles.addBookText}>Add New Book</Text>
      </TouchableOpacity>

      {showFilters && (
        <ScrollView style={styles.filtersContainer}>
          {renderFilterSection('Genres', genres, selectedGenres, 'genre', loadingGenres)}
          {renderFilterSection('Tropes', tropes, selectedTropes, 'trope', loadingTropes)}
          {renderFilterSection('Moods', moods, selectedMoods, 'mood', loadingMoods)}

          <View style={styles.filterSection}>
            <Text style={styles.filterTitle}>Page Range</Text>
            <View style={styles.sliderContainer}>
              <View style={styles.rangeLabels}>
                <Text style={styles.sliderLabel}>Min: {Math.round(pageRange[0])} pages</Text>
                <Text style={styles.sliderLabel}>Max: {Math.round(pageRange[1])} pages</Text>
              </View>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={APP_CONFIG.MAX_PAGES}
                value={pageRange[0]}
                step={10}
                onValueChange={(value) => {
                  const newMin = Math.round(value);
                  if (newMin <= pageRange[1]) {
                    setPageRange([newMin, pageRange[1]]);
                  }
                }}
                minimumTrackTintColor="#007AFF"
                maximumTrackTintColor="#e0e0e0"
              />
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={APP_CONFIG.MAX_PAGES}
                value={pageRange[1]}
                step={10}
                onValueChange={(value) => {
                  const newMax = Math.round(value);
                  if (newMax >= pageRange[0]) {
                    setPageRange([pageRange[0], newMax]);
                  }
                }}
                minimumTrackTintColor="#007AFF"
                maximumTrackTintColor="#e0e0e0"
              />
            </View>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterTitle}>Rating Range</Text>
            <View style={styles.sliderContainer}>
              <View style={styles.rangeLabels}>
                <Text style={styles.sliderLabel}>Min: {minRating.toFixed(1)} ⭐</Text>
                <Text style={styles.sliderLabel}>Max: {maxRating.toFixed(1)} ⭐</Text>
              </View>
              <Slider
                style={styles.slider}
                minimumValue={APP_CONFIG.MIN_RATING}
                maximumValue={APP_CONFIG.MAX_RATING}
                step={APP_CONFIG.RATING_STEP}
                value={minRating}
                onValueChange={(value) => {
                  if (value <= maxRating) {
                    setMinRating(value);
                  }
                }}
                minimumTrackTintColor="#007AFF"
                maximumTrackTintColor="#e0e0e0"
              />
              <Slider
                style={styles.slider}
                minimumValue={APP_CONFIG.MIN_RATING}
                maximumValue={APP_CONFIG.MAX_RATING}
                step={APP_CONFIG.RATING_STEP}
                value={maxRating}
                onValueChange={(value) => {
                  if (value >= minRating) {
                    setMaxRating(value);
                  }
                }}
                minimumTrackTintColor="#007AFF"
                maximumTrackTintColor="#e0e0e0"
              />
            </View>
          </View>

          <View style={styles.filterButtons}>
            <TouchableOpacity 
              style={[
                styles.searchButton, 
                (!searchQuery.trim() && 
                 selectedGenres.length === 0 && 
                 selectedTropes.length === 0 && 
                 selectedMoods.length === 0) && 
                styles.searchButtonDisabled
              ]} 
              onPress={handleManualSearch}
              disabled={!searchQuery.trim() && 
                       selectedGenres.length === 0 && 
                       selectedTropes.length === 0 && 
                       selectedMoods.length === 0}>
              <Ionicons name="search" size={20} color="#fff" style={styles.searchButtonIcon} />
              <Text style={styles.searchButtonText}>Search Books</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.resetButton}
              onPress={() => {
                setPageRange([0, APP_CONFIG.MAX_PAGES]);
                setMinRating(APP_CONFIG.MIN_RATING);
                setMaxRating(APP_CONFIG.MAX_RATING);
                setSelectedGenres([]);
                setSelectedTropes([]);
                setSelectedMoods([]);
              }}>
              <Text style={styles.resetButtonText}>Reset Filters</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}

      <View style={styles.resultsContainer}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Searching books...</Text>
          </View>
        ) : searchResults.length > 0 ? (
          <>
            <Text style={styles.resultsCount}>
              Found {searchResults.length} book{searchResults.length !== 1 ? 's' : ''}
            </Text>
            <FlatList
              data={searchResults}
              renderItem={renderBook}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.resultsList}
              showsVerticalScrollIndicator={false}
            />
          </>
        ) : debouncedQuery.trim() ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="search" size={48} color="#666" />
            <Text style={styles.emptyText}>No books found</Text>
            <Text style={styles.emptySubtext}>Try adjusting your search terms or filters</Text>
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <Ionicons name="book-outline" size={48} color="#666" />
            <Text style={styles.emptyText}>Start searching for books</Text>
            <Text style={styles.emptySubtext}>Enter a title or author name above</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  clearButton: {
    padding: 4,
  },
  filterButton: {
    padding: 8,
  },
  filtersContainer: {
    maxHeight: 300,
  },
  filterSection: {
    marginBottom: 24,
    padding: 16,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  sliderContainer: {
    paddingHorizontal: 8,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  rangeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  sliderLabel: {
    fontSize: 14,
    color: '#666',
  },
  filterButtons: {
    padding: 16,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  searchButtonDisabled: {
    backgroundColor: '#ccc',
  },
  searchButtonIcon: {
    marginRight: 8,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButton: {
    padding: 16,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
  resultsContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  resultsCount: {
    padding: 16,
    fontSize: 16,
    color: '#666',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  resultsList: {
    padding: 16,
  },
  bookCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  coverContainer: {
    marginRight: 16,
  },
  coverImage: {
    width: 60,
    height: 90,
    borderRadius: 8,
  },
  coverPlaceholder: {
    width: 60,
    height: 90,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageCount: {
    fontSize: 14,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  reviewCount: {
    fontSize: 12,
    color: '#999',
    marginLeft: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  filterChipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  filterChip: {
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  filterChipSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  filterChipText: {
    fontSize: 14,
    color: '#666',
  },
  filterChipTextSelected: {
    color: '#fff',
  },
  filterLoading: {
    marginTop: 8,
  },
  noFiltersText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 8,
  },
  addBookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  addBookText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
}); 