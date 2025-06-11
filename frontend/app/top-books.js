import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { books } from './services/api';
import { useApi } from './hooks/useApi';
import LoadingScreen from './components/LoadingScreen';

export default function TopBooksScreen() {
  const router = useRouter();
  // Fix: Call the API function correctly
  const { data: topBooksResponse, loading, error, execute: fetchBooks } = useApi(
    () => books.getTopRated(50)
  );

  // Fix: Handle the response structure like in HomeScreen
  const topBooks = Array.isArray(topBooksResponse) 
    ? topBooksResponse 
    : topBooksResponse?.books || topBooksResponse?.data || [];

  // Fix: Add useEffect to fetch data on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const getBookCoverUrl = (book) => {
    return book.coverUrl || book.coverImage || book.cover || null;
  };

  const getBookRating = (book) => {
    return book.averageRating || book.rating || book.average_rating || 0;
  };

  const getReviewCount = (book) => {
    return book._count?.reviews || book.reviewCount || book.reviews_count || 0;
  };

  if (loading) {
    return <LoadingScreen message="Loading top books..." />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="alert-circle-outline" size={64} color="#FF3B30" />
        <Text style={styles.errorText}>Failed to load top books</Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => fetchBooks()}>
          <Text style={styles.retryButtonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push('/(tabs)/')}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Top Rated Books</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.booksContainer}>
          {Array.isArray(topBooks) && topBooks.length > 0 ? (
            topBooks.map((book) => {
              const coverUrl = getBookCoverUrl(book);
              const rating = getBookRating(book);
              const reviewCount = getReviewCount(book);
              
              return (
                <TouchableOpacity
                  key={book.id}
                  style={styles.bookCard}
                  onPress={() => router.push(`/book/${book.id}`)}>
                  {coverUrl ? (
                    <Image
                      source={{ uri: coverUrl }}
                      style={styles.bookCover}
                      resizeMode="cover"
                      onError={(e) => {
                        console.log('Image failed to load:', coverUrl);
                      }}
                    />
                  ) : (
                    <View style={[styles.bookCover, styles.coverPlaceholder]}>
                      <Ionicons name="book" size={40} color="#666" />
                    </View>
                  )}
                  <Text style={styles.bookTitle} numberOfLines={2}>
                    {book.title}
                  </Text>
                  <Text style={styles.bookAuthor} numberOfLines={1}>
                    {book.author}
                  </Text>
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={styles.rating}>
                      {rating > 0 ? rating.toFixed(1) : 'N/A'}
                    </Text>
                    {reviewCount > 0 && (
                      <Text style={styles.reviewCount}>({reviewCount})</Text>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <View style={styles.noBooksContainer}>
              <Text style={styles.noBooksText}>No top books available</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
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
  booksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    justifyContent: 'space-between',
  },
  bookCard: {
    width: '31%',
    marginBottom: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookCover: {
    width: '100%',
    aspectRatio: 2/3,
    borderRadius: 4,
    marginBottom: 4,
  },
  coverPlaceholder: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookTitle: {
    fontSize: 11,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
    lineHeight: 14,
  },
  bookAuthor: {
    fontSize: 9,
    color: '#666',
    marginBottom: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 9,
    color: '#333',
    marginLeft: 2,
    fontWeight: '500',
  },
  reviewCount: {
    fontSize: 8,
    color: '#888',
    marginLeft: 2,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#666',
    marginTop: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noBooksContainer: {
    width: '100%',
    paddingVertical: 40,
    alignItems: 'center',
  },
  noBooksText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});