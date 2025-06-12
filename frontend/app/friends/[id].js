import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { api } from '../services/api';
import { useApp } from '../context/AppContext';
import { Ionicons } from '@expo/vector-icons';

export default function FriendProfileScreen() {
  const { id } = useLocalSearchParams();
  const { user } = useApp();
  const [friend, setFriend] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('reviews'); // 'reviews' or 'books'

  useEffect(() => {
    fetchFriendData();
  }, [id]);

  const fetchFriendData = async () => {
    try {
      setLoading(true);
      // Fetch friend details
      const friendResponse = await api.get(`/api/users/${id}`);
      setFriend(friendResponse.data);

      // Fetch friend's reviews
      const reviewsResponse = await api.get(`/api/reviews/user/${id}`);
      setReviews(reviewsResponse.data);
    } catch (error) {
      console.error('Error fetching friend data:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderReview = (review) => (
    <TouchableOpacity 
      key={review.id} 
      style={styles.reviewCard}
      onPress={() => router.push(`/books/${review.book.id}`)}>
      <View style={styles.reviewHeader}>
        <Image 
          source={{ uri: review.book.coverUrl || 'https://via.placeholder.com/50' }} 
          style={styles.bookCover}
        />
        <View style={styles.reviewBookInfo}>
          <Text style={styles.bookTitle}>{review.book.title}</Text>
          <Text style={styles.bookAuthor}>{review.book.author}</Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={16} color="#FFD700" />
        <Text style={styles.ratingText}>{review.rating}/5</Text>
      </View>
      <Text style={styles.reviewContent} numberOfLines={3}>
        {review.content}
      </Text>
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

  if (!friend) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Friend not found</Text>
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
            {friend.username.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text style={styles.username}>{friend.username}</Text>
        <Text style={styles.email}>{friend.email}</Text>
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
  bookCover: {
    width: 50,
    height: 75,
    borderRadius: 5,
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
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