import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { books, challenges } from '../services/api';
import { useApi } from '../hooks/useApi';
import Card from '../components/Card';

export default function HomeScreen() {
  const router = useRouter();
  const { data: topBooks, loading: topBooksLoading, error: topBooksError, execute: fetchTopBooks } = useApi(books.getTopRated, { limit: 5 });
  const { data: currentChallenges, loading: challengesLoading, error: challengesError, execute: fetchChallenges } = useApi(challenges.getCurrent);

  useEffect(() => {
    if (topBooksError) {
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
  }, [challengesError]);

  const renderChallenge = (challenge) => (
    <TouchableOpacity 
      key={challenge.id}
      style={styles.challengeCard}
      onPress={() => router.push(`/challenge/${challenge.id}`)}>
      <Text style={styles.challengeTitle}>{challenge.title}</Text>
      <Text style={styles.challengeDescription}>{challenge.description}</Text>
      <View style={styles.progressContainer}>
        <View 
          style={[
            styles.progressBar, 
            { width: `${(challenge.completedBooks / challenge.targetBooks) * 100}%` }
          ]} 
        />
        <Text style={styles.progressText}>
          {challenge.completedBooks}/{challenge.targetBooks} books completed
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Current Challenges</Text>
        </View>
        
        <View style={styles.challengesContainer}>
          {challengesLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#007AFF" />
            </View>
          ) : currentChallenges?.length > 0 ? (
            currentChallenges.map(renderChallenge)
          ) : (
            <Text style={styles.noChallengesText}>No active challenges</Text>
          )}
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
              {topBooks.map((book) => (
                <TouchableOpacity
                  key={book.id}
                  style={styles.bookCard}
                  onPress={() => router.push(`/book/${book.id}`)}>
                  {book.coverUrl ? (
                    <Image
                      source={{ uri: book.coverUrl }}
                      style={styles.bookCover}
                      resizeMode="cover"
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
                    <Text style={styles.rating}>{book.averageRating?.toFixed(1) || 'N/A'}</Text>
                  </View>
                </TouchableOpacity>
              ))}
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
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  challengesContainer: {
    padding: 16,
  },
  challengeCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  challengeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  progressContainer: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#007AFF',
  },
  topBooksContainer: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  bookCard: {
    width: 140,
    marginRight: 16,
  },
  bookCover: {
    width: 140,
    height: 210,
    borderRadius: 8,
    marginBottom: 8,
  },
  coverPlaceholder: {
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
  },
  noChallengesText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    fontStyle: 'italic',
  },
  noBooksText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 20,
  },
}); 