import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { books } from '../services/api';
import { useApi } from '../hooks/useApi';
import Button from '../components/Button';

export default function AddBookScreen() {
  const router = useRouter();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    description: '',
    pages: '',
    coverUrl: '',
    genres: [],
    tropes: [],
    moods: [],
  });

  const { execute: createBook, loading: creatingBook } = useApi(books.create);
  const { execute: fetchGenres, data: genresData, loading: loadingGenres } = useApi(books.getGenres);
  const { execute: fetchTropes, data: tropesData, loading: loadingTropes } = useApi(books.getTropes);
  const { execute: fetchMoods, data: moodsData, loading: loadingMoods } = useApi(books.getMoods);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        await fetchGenres();
        await fetchTropes();
        await fetchMoods();
      } catch (error) {
        console.error('Error fetching filter options:', error);
      }
    };

    fetchFilterOptions();
  }, [fetchGenres, fetchTropes, fetchMoods]);

  const renderTagSelector = (items, selected, onSelect, title, loading) => (
    <View style={styles.tagSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {loading ? (
        <ActivityIndicator size="small" color="#007AFF" />
      ) : (
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
      )}
    </View>
  );

  const handleCreateBook = async () => {
    if (!newBook.title || !newBook.author) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    try {
      const result = await createBook(newBook);
      console.log('Book created successfully:', result);
      router.push('/books');
    } catch (error) {
      console.error('Book creation failed:', error);
      Alert.alert('Error', 'Failed to create book');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Add Book</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.label}>Title *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter book title"
            value={newBook.title}
            onChangeText={(text) => setNewBook({ ...newBook, title: text })}
          />

          <Text style={styles.label}>Author *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter author name"
            value={newBook.author}
            onChangeText={(text) => setNewBook({ ...newBook, author: text })}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter book description"
            value={newBook.description}
            onChangeText={(text) => setNewBook({ ...newBook, description: text })}
            multiline
            numberOfLines={4}
          />

          <Text style={styles.label}>Pages</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter number of pages"
            value={newBook.pages}
            onChangeText={(text) => setNewBook({ ...newBook, pages: text })}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Cover URL</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter cover image URL"
            value={newBook.coverUrl}
            onChangeText={(text) => setNewBook({ ...newBook, coverUrl: text })}
          />

          {renderTagSelector(
            genresData,
            newBook.genres,
            (genres) => setNewBook({ ...newBook, genres }),
            'Genres',
            loadingGenres
          )}

          {renderTagSelector(
            tropesData,
            newBook.tropes,
            (tropes) => setNewBook({ ...newBook, tropes }),
            'Tropes',
            loadingTropes
          )}

          {renderTagSelector(
            moodsData,
            newBook.moods,
            (moods) => setNewBook({ ...newBook, moods }),
            'Moods',
            loadingMoods
          )}

          <Button
            title="Add Book"
            onPress={handleCreateBook}
            loading={creatingBook}
            style={styles.submitButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  form: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    marginTop: 16,
  },
  tagSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  selectedTag: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  tagText: {
    color: '#333',
    fontSize: 14,
  },
  selectedTagText: {
    color: '#fff',
  },
});