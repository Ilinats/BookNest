import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { api } from '../../services/api';
import { useApp } from '../../context/AppContext';
import { Ionicons } from '@expo/vector-icons';

export default function FriendProfileScreen() {
  const { id } = useLocalSearchParams();
  const { user } = useApp();
  const [friend, setFriend] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('reviews');

  useEffect(() => {
    fetchFriendData();
  }, [id]);

  const fetchFriendData = async () => {
    console.log('Fetching friend data for ID:', id);
    try {
      setLoading(true);
      setError(null);
      
      // Fetch friend details
      const friendResponse = await api.get(`/api/users/${id}`);
      console.log('Friend data response:', friendResponse.data);
      if (friendResponse.data) {
        setFriend(friendResponse.data.data);
      } else {
        throw new Error('Friend not found');
      }

      // Fetch friend's reviews
      const reviewsResponse = await api.get(`/api/reviews/user/${id}`);
      console.log('Reviews response:', reviewsResponse.data);
      if (reviewsResponse.data.success) {
        setReviews(reviewsResponse.data.data.reviews || []);
      } else {
        setReviews([]);
      }
    } catch (error) {
      console.error('Error fetching friend data:', error);
      setError(error.message || 'Failed to load friend data');
    } finally {
      setLoading(false);
    }
  };

  const renderReview = (review) => (
    <TouchableOpacity 
      key={review.id} 
      style={styles.reviewCard}
      onPress={() => router.push(`/books/${review.bookId}`)}>
      <View style={styles.reviewHeader}>
        <View style={styles.reviewBookInfo}>
          <Text style={styles.bookTitle}>Book ID: {review.bookId}</Text>
          <Text style={styles.bookAuthor}>Rating: {review.rating}/5</Text>
        </View>
      </View>
      <View style={styles.reviewDetails}>
        <Text style={styles.reviewContent}>{review.text}</Text>
        <View style={styles.reviewMetadata}>
          <Text style={styles.reviewMeta}>Pace: {review.pace}</Text>
          <Text style={styles.reviewMeta}>Focus: {review.focus}</Text>
          {review.lovable && <Text style={styles.reviewMeta}>❤️ Lovable</Text>}
          {review.contentWarnings && (
            <Text style={styles.reviewMeta}>⚠️ {review.contentWarnings}</Text>
          )}
        </View>
      </View>
      <Text style={styles.reviewDate}>
        {new Date(review.createdAt).toLocaleDateString()}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error || !friend) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error || 'Friend not found'}</Text>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>
            {friend.username ? friend.username.charAt(0).toUpperCase() : '?'}
          </Text>
        </View>
        <Text style={styles.username}>{friend.username || 'Unknown User'}</Text>
        <Text style={styles.email}>{friend.email || 'No email available'}</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'reviews' && styles.activeTab]}
          onPress={() => setActiveTab('reviews')}>
          <Text style={[styles.tabText, activeTab === 'reviews' && styles.activeTabText]}>
            Reviews
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'books' && styles.activeTab]}
          onPress={() => setActiveTab('books')}>
          <Text style={[styles.tabText, activeTab === 'books' && styles.activeTabText]}>
            Books
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {activeTab === 'reviews' ? (
          reviews.length > 0 ? (
            reviews.map(renderReview)
          ) : (
            <Text style={styles.noContentText}>No reviews yet</Text>
          )
        ) : (
          <Text style={styles.noContentText}>Books feature coming soon</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  content: {
    padding: 15,
  },
  reviewCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reviewHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  reviewBookInfo: {
    marginLeft: 10,
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
  },
  reviewDetails: {
    marginTop: 10,
  },
  reviewMetadata: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 8,
  },
  reviewMeta: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  reviewContent: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  reviewDate: {
    fontSize: 12,
    color: '#999',
  },
  noContentText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
