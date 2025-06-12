import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import { api } from '../services/api';
import { router } from 'expo-router';

export default function FriendsScreen() {
  const { user, isAuthenticated, loading: authLoading } = useApp();
  const [activeTab, setActiveTab] = useState('reviews'); // 'reviews' or 'friends'
  const [friendReviews, setFriendReviews] = useState([]);
  const [userFriendships, setUserFriendships] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && isAuthenticated && user) {
      if (activeTab === 'reviews') {
        fetchFriendReviews();
      } else {
        fetchFriends();
      }
    }
  }, [activeTab, authLoading, isAuthenticated, user]);

  const fetchFriendReviews = async () => {
    console.log("User:", user);
    if (!user?.data?.id) return;
    
    try {
      setLoading(true);
      const response = await api.get(`/api/reviews/friends/${parseInt(user.data.id)}`);
      console.log('Friend reviews response:', response.data);
      setFriendReviews(response.data);
    } catch (error) {
      console.error('Error fetching friend reviews:', error);
      Alert.alert('Error', 'Failed to load friend reviews');
    } finally {
      setLoading(false);
    }
  };

  const fetchFriends = async () => {
    if (!user?.data?.id) return;
    
    try {
      setLoading(true);
      const response = await api.get(`/api/friendships/user/${parseInt(user.data.id)}`);
      console.log('Friends response:', response.data);
      if (response.data.success) {
        setUserFriendships(response.data.data);
      } else {
        setUserFriendships([]);
      }
    } catch (error) {
      console.error('Error fetching friends:', error);
      Alert.alert('Error', 'Failed to load friends');
      setUserFriendships([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!user?.data?.id) return;
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      setSearchLoading(true);
      const response = await api.get(`/api/users/search?username=${searchQuery}`);
      console.log('Search results:', response.data);
      if (response.data.success) {
        setSearchResults(response.data.data);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error searching users:', error);
      Alert.alert('Error', 'Failed to search users');
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleAddFriend = async (friendId) => {
    if (!user?.data?.id) return;
    
    try {
      const response = await api.post('/api/friendships', {
        userId: parseInt(user.data.id),
        friendId: parseInt(friendId)
      });
      console.log('Add friend response:', response.data);
      Alert.alert('Success', 'Friend added successfully');
      fetchFriends();
      setSearchResults([]);
      setSearchQuery('');
    } catch (error) {
      console.error('Error adding friend:', error);
      Alert.alert('Error', 'Failed to add friend');
    }
  };

  const renderFriendReview = (review) => (
    <TouchableOpacity 
      key={review.id} 
      style={styles.friendReviewCard}
      onPress={() => router.push(`/book/${review.bookId}`)}>
      <View style={styles.friendReviewHeader}>
        <View style={styles.friendInfo}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>
              {review.user.username.charAt(0).toUpperCase()}
            </Text>
          </View>
          <View style={styles.friendDetails}>
            <Text style={styles.friendName}>{review.user.username}</Text>
            <Text style={styles.reviewDate}>
              {new Date(review.createdAt).toLocaleDateString()}
            </Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{review.rating.toFixed(1)}</Text>
        </View>
      </View>

      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{review.book.title}</Text>
        <Text style={styles.bookAuthor}>{review.book.author}</Text>
      </View>

      <Text style={styles.reviewText} numberOfLines={3}>
        {review.text || 'No review text provided'}
      </Text>

      <View style={styles.reviewFooter}>
        <View style={styles.reviewStats}>
          {review.pace && (
            <View style={styles.statBadge}>
              <Text style={styles.statText}>{review.pace}</Text>
            </View>
          )}
          {review.focus && (
            <View style={styles.statBadge}>
              <Text style={styles.statText}>{review.focus}</Text>
            </View>
          )}
        </View>
        <View style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>View Book</Text>
          <Ionicons name="chevron-forward" size={16} color="#007AFF" />
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderFriend = (friendship) => {
    const friend = friendship.userId === parseInt(user.data.id) ? friendship.friend : friendship.user;
    return (
      <View key={friendship.id} style={styles.friendCard}>
        <View style={styles.friendInfo}>
          <Text style={styles.friendName}>{friend.username}</Text>
          <Text style={styles.friendEmail}>{friend.email}</Text>
        </View>
        <TouchableOpacity
          style={styles.viewProfileButton}
          onPress={() => router.push(`/friends/profile/${friend.id}`)}>
          <Text style={styles.viewProfileButtonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderSearchResult = (user) => (
    <View key={user.id} style={styles.searchResultCard}>
      <View style={styles.friendInfo}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>
            {user.username.charAt(0).toUpperCase()}
          </Text>
        </View>
        <View style={styles.friendDetails}>
          <Text style={styles.friendName}>{user.username}</Text>
          <Text style={styles.friendEmail}>{user.email}</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.addFriendButton}
        onPress={() => handleAddFriend(user.id)}>
        <Text style={styles.addFriendText}>Add Friend</Text>
      </TouchableOpacity>
    </View>
  );

  if (authLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <View style={styles.noContentContainer}>
        <Text style={styles.noContentText}>Please log in to view friends</Text>
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => router.push('/auth/login')}>
          <Text style={styles.loginButtonText}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'reviews' && styles.activeTab]}
          onPress={() => setActiveTab('reviews')}>
          <Text style={[styles.tabText, activeTab === 'reviews' && styles.activeTabText]}>
            Friend Reviews
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'friends' && styles.activeTab]}
          onPress={() => setActiveTab('friends')}>
          <Text style={[styles.tabText, activeTab === 'friends' && styles.activeTabText]}>
            Friends
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'friends' && (
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search users..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch}
            />
            <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
              <Ionicons name="search" size={20} color="#666" />
            </TouchableOpacity>
          </View>
          {searchLoading && <ActivityIndicator style={styles.loader} />}
          {searchResults.length > 0 && (
            <View style={styles.searchResults}>
              {searchResults.map(renderSearchResult)}
            </View>
          )}
        </View>
      )}

      <ScrollView style={styles.content}>
        {loading ? (
          <ActivityIndicator style={styles.loader} />
        ) : activeTab === 'reviews' ? (
          friendReviews?.length > 0 ? (
            <View style={styles.reviewsGrid}>
              {friendReviews.map(renderFriendReview)}
            </View>
          ) : (
            <View style={styles.noContentContainer}>
              <Text style={styles.noContentText}>No friend reviews yet</Text>
              <Text style={styles.noContentSubtext}>Your friends havent reviewed any books</Text>
            </View>
          )
        ) : (
          userFriendships?.length > 0 ? (
            <View style={styles.friendsList}>
              {userFriendships.map(friend => (
                <View key={friend.id} style={styles.friendCard}>
                  <View style={styles.friendInfo}>
                    <View style={styles.avatarContainer}>
                      <Text style={styles.avatarText}>
                        {friend.username.charAt(0).toUpperCase()}
                      </Text>
                    </View>
                    <View style={styles.friendDetails}>
                      <Text style={styles.friendName}>{friend.username}</Text>
                      <Text style={styles.friendEmail}>{friend.email}</Text>
                    </View>
                  </View>
                  <TouchableOpacity 
                    style={styles.viewProfileButton}
                    onPress={() => router.push(`/friends/profile/${friend.id}`)}>
                    <Text style={styles.viewProfileText}>View Profile</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.noContentContainer}>
              <Text style={styles.noContentText}>No friends yet</Text>
              <Text style={styles.noContentSubtext}>Search for users to add them as friends</Text>
            </View>
          )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
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
    fontWeight: '600',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  searchButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  reviewsGrid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  friendsList: {
    padding: 16,
  },
  friendReviewCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  friendCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchResultCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  friendInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  friendDetails: {
    flex: 1,
  },
  friendName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  friendEmail: {
    fontSize: 14,
    color: '#666',
  },
  reviewDate: {
    fontSize: 12,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '600',
    color: '#FFB800',
  },
  bookInfo: {
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  bookTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  bookAuthor: {
    fontSize: 13,
    color: '#666',
  },
  reviewText: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
    marginBottom: 12,
  },
  reviewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewStats: {
    flexDirection: 'row',
    gap: 6,
  },
  statBadge: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statText: {
    fontSize: 12,
    color: '#666',
    textTransform: 'capitalize',
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    fontSize: 13,
    color: '#007AFF',
    fontWeight: '500',
  },
  viewProfileButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  viewProfileText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  addFriendButton: {
    backgroundColor: '#34C759',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addFriendText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  searchResults: {
    marginTop: 12,
  },
  loader: {
    margin: 20,
  },
  noContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noContentText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  noContentSubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 