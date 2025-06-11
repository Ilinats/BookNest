import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { books, challenges } from '../services/api';
import { useApi } from '../hooks/useApi';

export default function HomeScreen() {
  const router = useRouter();
  
  const { data: topBooksResponse, loading: topBooksLoading, error: topBooksError, execute: fetchTopBooks } = useApi(
    () => books.getTopRated(5)
  );
  
  const { data: currentChallenges, loading: challengesLoading, error: challengesError, execute: fetchChallenges } = useApi(
    challenges.getCurrent
  );

  const topBooks = Array.isArray(topBooksResponse) 
    ? topBooksResponse 
    : topBooksResponse?.books || topBooksResponse?.data || [];

  useEffect(() => {
    fetchTopBooks();
    fetchChallenges();
  }, []);

  useEffect(() => {
    if (topBooksError) {
      console.error('Top books error:', topBooksError);
      Alert.alert(
        'Error',
        'Failed to load top books. Please try again.',
        [
          {
            text: 'Retry',
            onPress: fetchTopBooks,
          },
          {
            text: 'OK',
            style: 'cancel',
          },
        ]
      );
    }
  }, [topBooksError]);

  useEffect(() => {
    if (challengesError) {
      console.error('Challenges error:', challengesError);
      // Only show error alert for non-404 errors (actual server errors)
      if (challengesError.response?.status !== 404) {
        Alert.alert(
          'Error',
          'Failed to load challenges. Please try again.',
          [
            {
              text: 'Retry',
              onPress: fetchChallenges,
            },
            {
              text: 'OK',
              style: 'cancel',
            },
          ]
        );
      }
    }
  }, [challengesError]);

  const renderChallenge = (challenge) => (
    <TouchableOpacity 
      key={challenge.id}
      style={styles.challengeCard}
      onPress={() => router.push(`/challenge/${challenge.id}`)}>
      <Text style={styles.challengeTitle}>{challenge.title}</Text>
      <Text style={styles.challengeDescription}>{challenge.description}</Text>
      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View 
            style={[
              styles.progressBar, 
              { width: `${Math.min(100, (challenge.completedBooks / challenge.targetBooks) * 100)}%` }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {challenge.completedBooks}/{challenge.targetBooks} books completed
        </Text>
      </View>
    </TouchableOpacity>
  );

  // Helper function to get book cover URL with fallback
  const getBookCoverUrl = (book) => {
    return book.coverUrl || book.coverImage || book.cover || null;
  };

  // Helper function to get book rating with fallback
  const getBookRating = (book) => {
    return book.averageRating || book.rating || book.average_rating || 0;
  };

  // Helper function to get review count with fallback
  const getReviewCount = (book) => {
    return book._count?.reviews || book.reviewCount || book.reviews_count || 0;
  };

  // Safely get challenges array
  const challengesList = Array.isArray(currentChallenges) ? currentChallenges : [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.mainTitle}>Home</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Challenges</Text>
          <View style={styles.challengesContainer}>
            {challengesLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007AFF" />
              </View>
            ) : challengesList.length > 0 ? (
              challengesList.map(renderChallenge)
            ) : (
              <TouchableOpacity 
                style={styles.noChallengesContainer}
                onPress={() => router.push('/challenges/create')}>
                <Text style={styles.noChallengesText}>No active challenges</Text>
                <Text style={styles.createChallengeText}>Tap to create your first challenge!</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Books</Text>
            <TouchableOpacity onPress={() => router.push('/top-books')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          
          {topBooksLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#007AFF" />
            </View>
          ) : Array.isArray(topBooks) && topBooks.length > 0 ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.topBooksContainer}>
              {topBooks.map((book) => {
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
              })}
            </ScrollView>
          ) : (
            <Text style={styles.noBooksText}>No top books available</Text>
          )}
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
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  seeAll: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  challengesContainer: {
    minHeight: 80,
  },
  challengeCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  challengeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  noChallengesContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  noChallengesText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  createChallengeText: {
    fontSize: 14,
    color: '#007AFF',
    textAlign: 'center',
    fontWeight: '500',
  },
  topBooksContainer: {
    paddingLeft: 0,
  },
  bookCard: {
    width: 120,
    marginRight: 15,
  },
  bookCover: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  coverPlaceholder: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    lineHeight: 18,
  },
  bookAuthor: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    color: '#333',
    marginLeft: 4,
    fontWeight: '500',
  },
  reviewCount: {
    fontSize: 10,
    color: '#888',
    marginLeft: 4,
  },
  noBooksText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
    paddingVertical: 40,
  },
  loadingContainer: {
    paddingVertical: 40,
    alignItems: 'center',
  },
});