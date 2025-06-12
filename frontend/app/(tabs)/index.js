import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Alert, TextInput, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { books, challenges, friendships, api } from '../services/api';
import { useApi } from '../hooks/useApi';
import { useApp } from '../context/AppContext';

export default function HomeScreen() {
  const router = useRouter();
  const { user: currentUser } = useApp();
  const [addFriendModalVisible, setAddFriendModalVisible] = useState(false);
  const [friendUsername, setFriendUsername] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [friendReviews, setFriendReviews] = useState([]);
  
  const { data: topBooksResponse, loading: topBooksLoading, error: topBooksError, execute: fetchTopBooks } = useApi(
    () => books.getTopRated(13)
  );
  
  const { data: currentChallenges, loading: challengesLoading, error: challengesError, execute: fetchChallenges } = useApi(
    challenges.getCurrent
  );

  const { data: userFriendships, loading: friendshipsLoading, error: friendshipsError, execute: fetchFriendships } = useApi(
    () => friendships.getUserFriendships(currentUser?.data?.id)
  );

  const topBooks = Array.isArray(topBooksResponse) 
    ? topBooksResponse 
    : topBooksResponse?.books || topBooksResponse?.data || [];

  useEffect(() => {
    fetchTopBooks();
    fetchChallenges();
    console.log('Fetching user friendships for user ID:', currentUser?.data?.id);
    if (currentUser?.data?.id) {
      fetchFriendships();
    }
  }, [currentUser?.data?.id]);

  useEffect(() => {
    const fetchFriendReviews = async () => {
      if (!userFriendships?.data) return;
      
      try {
        const reviews = [];
        for (const friend of userFriendships.data) {
          const response = await api.get(`/api/reviews/user/${friend.id}?limit=3`);
          if (response?.data?.success && response.data.data?.reviews) {
            reviews.push(...response.data.data.reviews.map(review => ({
              ...review,
              user: friend
            })));
          }
        }
        setFriendReviews(reviews);
      } catch (error) {
        console.error('Error fetching friend reviews:', error);
      }
    };

    fetchFriendReviews();
  }, [userFriendships]);

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

  const handleSearchFriend = async () => {
    if (!friendUsername.trim()) {
      Alert.alert('Error', 'Please enter a username');
      return;
    }

    setSearching(true);
    try {
      console.log('Searching for username:', friendUsername);
      const response = await api.get(`/api/users/search?username=${friendUsername}`);
      console.log('Search response:', response);
      
      if (response?.data?.data) {
        setSearchResults(response.data.data);
      } else {
        setSearchResults([]);
        console.log('No results found or invalid response format');
      }
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
      Alert.alert('Error', 'Failed to search for user. Please try again.');
    } finally {
      setSearching(false);
    }
  };

  const handleAddFriend = async (friendId) => {
    try {
      await friendships.createFriendship({
        userId: currentUser.data.id,
        friendId: friendId
      });
      setAddFriendModalVisible(false);
      setFriendUsername('');
      setSearchResults([]);
      fetchFriendships();
      Alert.alert('Success', 'Friend added successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to add friend. Please try again.');
    }
  };

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

  const renderFriendReviews = () => {
    if (!userFriendships?.data?.length) {
      return (
        <View style={styles.noContentContainer}>
          <Text style={styles.noContentText}>No friends yet</Text>
          <Text style={styles.noContentSubtext}>Add friends to see their reviews</Text>
        </View>
      );
    }

    if (!friendReviews.length) {
      return (
        <View style={styles.noContentContainer}>
          <Text style={styles.noContentText}>No reviews from friends yet</Text>
          <Text style={styles.noContentSubtext}>Your friends havent reviewed any books</Text>
        </View>
      );
    }

    return (
      <View style={styles.friendReviewsContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Friend Reviews</Text>
          <TouchableOpacity 
            style={styles.seeAllButton}
            onPress={() => router.push('/friends')}>
            <Text style={styles.seeAllText}>See All</Text>
            <Ionicons name="chevron-forward" size={16} color="#007AFF" />
          </TouchableOpacity>
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.friendReviewsScroll}>
          {friendReviews.map(renderFriendReview)}
        </ScrollView>
      </View>
    );
  };

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

        <View style={styles.section}>
          {renderFriendReviews()}
        </View>

        <Modal
          visible={addFriendModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => {
            setAddFriendModalVisible(false);
            setFriendUsername('');
            setSearchResults([]);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add Friend</Text>
              <View style={styles.searchContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter friend's username"
                  value={friendUsername}
                  onChangeText={setFriendUsername}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  style={styles.searchButton}
                  onPress={handleSearchFriend}
                  disabled={searching}>
                  {searching ? (
                    <ActivityIndicator size="small" color="#fff" />
                  ) : (
                    <Text style={styles.searchButtonText}>Search</Text>
                  )}
                </TouchableOpacity>
              </View>

              {searchResults.length > 0 ? (
                <View style={styles.searchResults}>
                  {searchResults.map(result => (
                    <TouchableOpacity
                      key={result.id}
                      style={styles.searchResultItem}
                      onPress={() => handleAddFriend(result.id)}>
                      <Text style={styles.searchResultUsername}>{result.username}</Text>
                      <Ionicons name="person-add" size={24} color="#007AFF" />
                    </TouchableOpacity>
                  ))}
                </View>
              ) : friendUsername && !searching ? (
                <Text style={styles.noResultsText}>No users found</Text>
              ) : null}

              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setAddFriendModalVisible(false);
                  setFriendUsername('');
                  setSearchResults([]);
                }}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    marginBottom: 12,
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
  friendReviewsContainer: {
    marginTop: 12,
    paddingBottom: 8,
  },
  friendReviewCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    width: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  friendReviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  friendInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  friendDetails: {
    flex: 1,
  },
  friendName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
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
  noContentContainer: {
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
  noContentText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  noContentSubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
  friendReviewsScroll: {
    paddingBottom: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  searchResults: {
    marginBottom: 16,
    maxHeight: 200,
  },
  searchResultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 8,
  },
  searchResultUsername: {
    fontSize: 16,
    color: '#333',
  },
  noResultsText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 16,
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});