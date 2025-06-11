import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { user } from '../services/api';
import { useApi } from '../hooks/useApi';
import { useApp } from '../context/AppContext';

export default function ProfileScreen() {
  const router = useRouter();
  const { user: currentUser, logout } = useApp();
  const [activeTab, setActiveTab] = useState('stats');

  const { data: profile, loading: profileLoading, error: profileError, execute: fetchProfile } = useApi(user.getProfile);
  const { data: reviewsData, loading: reviewsLoading, error: reviewsError, execute: fetchReviews } = useApi(user.getReviews);

  useEffect(() => {
    if (currentUser) {
      fetchProfile();
      fetchReviews();
    }
  }, [currentUser]);

  useEffect(() => {
    if (profileError || reviewsError) {
      Alert.alert(
        'Error',
        'Failed to load profile data. Please try again.',
        [
          {
            text: 'Retry',
            onPress: () => {
              if (profileError) fetchProfile();
              if (reviewsError) fetchReviews();
            },
          },
          {
            text: 'OK',
            style: 'cancel',
          },
        ]
      );
    }
  }, [profileError, reviewsError]);

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await logout();
              router.replace('/auth/login');
            } catch (error) {
              Alert.alert('Error', 'Failed to logout. Please try again.');
            }
          },
        },
      ]
    );
  };

  if (!currentUser) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.notLoggedInContainer}>
          <Ionicons name="person-circle-outline" size={80} color="#666" />
          <Text style={styles.notLoggedInText}>Please login to view your profile</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push('/auth/login')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (profileLoading || reviewsLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      </SafeAreaView>
    );
  }

  const reviews = reviewsData?.data || [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: profile?.data?.avatar || 'https://ui-avatars.com/api/?name=' + (profile?.data?.username || 'User') + '&background=random' }}
                style={styles.avatar}
              />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.username}>{profile?.data?.username}</Text>
              <Text style={styles.email}>{profile?.data?.email}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={20} color="#007AFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'stats' && styles.activeTab]}
            onPress={() => setActiveTab('stats')}>
            <Text
              style={[styles.tabText, activeTab === 'stats' && styles.activeTabText]}>
              Statistics
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'reviews' && styles.activeTab]}
            onPress={() => setActiveTab('reviews')}>
            <Text
              style={[styles.tabText, activeTab === 'reviews' && styles.activeTabText]}>
              Reviews
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'stats' ? (
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Ionicons name="book" size={24} color="#007AFF" />
              <Text style={styles.statValue}>{profile?.data?._count?.reviews || 0}</Text>
              <Text style={styles.statLabel}>Books Read</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="star" size={24} color="#FFD700" />
              <Text style={styles.statValue}>
                {profile?.data?.reviews?.reduce((acc, review) => acc + review.rating, 0) / (profile?.data?.reviews?.length || 1) || 0}
              </Text>
              <Text style={styles.statLabel}>Avg. Rating</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="chatbubble" size={24} color="#FF3B30" />
              <Text style={styles.statValue}>{profile?.data?._count?.reviews || 0}</Text>
              <Text style={styles.statLabel}>Reviews</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="trophy" size={24} color="#34C759" />
              <Text style={styles.statValue}>{profile?.data?._count?.challenges || 0}</Text>
              <Text style={styles.statLabel}>Challenges</Text>
            </View>
          </View>
        ) : (
          <View style={styles.reviewsContainer}>
            {reviews.map((review) => (
              <TouchableOpacity
                key={review.id}
                style={styles.reviewCard}
                onPress={() => router.push(`/book/${review.book.id}`)}>
                <View style={styles.reviewHeader}>
                  <Text style={styles.bookTitle}>{review.book.title}</Text>
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={styles.rating}>{review.rating}</Text>
                  </View>
                </View>
                <Text style={styles.reviewText} numberOfLines={2}>
                  {review.text}
                </Text>
                <Text style={styles.reviewDate}>
                  {new Date(review.createdAt).toLocaleDateString()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
  notLoggedInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  notLoggedInText: {
    fontSize: 16,
    color: '#666',
    marginTop: 16,
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    padding: 8,
  },
  tabs: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
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
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
  },
  statCard: {
    width: '50%',
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  reviewsContainer: {
    padding: 16,
  },
  reviewCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
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
  reviewText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  reviewDate: {
    fontSize: 12,
    color: '#999',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 