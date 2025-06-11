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
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const { data: searchResponse, loading, error, execute: searchBooks } = useApi(books.search);

  useEffect(() => {
    if (error) {
      Alert.alert(
        'Error',
        'Failed to search books. Please try again.',
        [
          {
            text: 'Retry',
            onPress: () => handleSearch(),
          },
          {
            text: 'OK',
            style: 'cancel',
          },
        ]
      );
    }
  }, [error]);

  const handleSearch = useCallback(async () => {
    if (!debouncedQuery.trim()) {
      Alert.alert('Error', 'Please enter a search query');
      return;
    }

    try {
      await searchBooks(debouncedQuery, {
        minPages: Math.round(pageRange[0]),
        maxPages: Math.round(pageRange[1]),
        minRating: parseFloat(minRating.toFixed(1)),
      });
    } catch (error) {
      console.error('Search error:', error);
    }
  }, [debouncedQuery, pageRange, minRating, searchBooks]);

  const handleQueryChange = (text) => {
    setSearchQuery(text);
    // Debounce the search query
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(text);
    }, APP_CONFIG.SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(timeoutId);
  };

  const renderBook = ({ item }) => (
    <TouchableOpacity
      style={styles.bookCard}
      onPress={() => router.push(`/book/${item.id}`)}>
      <View style={styles.coverContainer}>
        <View style={styles.coverPlaceholder}>
          <Ionicons name="book" size={40} color="#666" />
        </View>
      </View>
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
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
            placeholder="Search by title or author..."
            value={searchQuery}
            onChangeText={handleQueryChange}
            onSubmitEditing={handleSearch}
          />
        </View>
      </View>

      <ScrollView style={styles.filtersContainer}>
        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>Page Range</Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Min: {pageRange[0]} pages</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={APP_CONFIG.MAX_PAGES}
              value={pageRange[0]}
              step={1}
              onValueChange={(value) => setPageRange([Math.round(value), pageRange[1]])}
              minimumTrackTintColor="#007AFF"
              maximumTrackTintColor="#e0e0e0"
            />
            <Text style={styles.sliderLabel}>Max: {pageRange[1]} pages</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={APP_CONFIG.MAX_PAGES}
              value={pageRange[1]}
              step={1}
              onValueChange={(value) => setPageRange([pageRange[0], Math.round(value)])}
              minimumTrackTintColor="#007AFF"
              maximumTrackTintColor="#e0e0e0"
            />
          </View>
        </View>

        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>Minimum Rating</Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>{minRating.toFixed(1)} stars</Text>
            <Slider
              style={styles.slider}
              minimumValue={APP_CONFIG.MIN_RATING}
              maximumValue={APP_CONFIG.MAX_RATING}
              step={APP_CONFIG.RATING_STEP}
              value={minRating}
              onValueChange={setMinRating}
              minimumTrackTintColor="#007AFF"
              maximumTrackTintColor="#e0e0e0"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </ScrollView>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      ) : searchResponse?.books ? (
        <FlatList
          data={searchResponse.books}
          renderItem={renderBook}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.resultsList}
        />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
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
  sliderLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    margin: 16,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 4,
  },
  reviewCount: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
}); 