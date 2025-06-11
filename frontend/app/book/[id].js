import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Alert,
  Modal,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { books, library } from '../services/api';
import { useApi } from '../hooks/useApi';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import Card from '../components/Card';
import LoadingScreen from '../components/LoadingScreen';

export default function BookDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { user } = useApp();
  const [isFolderModalVisible, setIsFolderModalVisible] = useState(false);
  const [newLibraryName, setNewLibraryName] = useState('');
  const [libraryType, setLibraryType] = useState('CUSTOM');

  const { data: book, loading: bookLoading, error: bookError, execute: fetchBook } = useApi(
    () => books.getById(id)
  );
  const { data: libraries, loading: librariesLoading, error: librariesError, execute: fetchLibraries } = useApi(
    () => user?.data?.id ? library.getUserLibraries(user.data.id) : Promise.resolve([])
  );
  const { execute: createLibrary, loading: creatingLibrary } = useApi(library.createLibrary);
  const { execute: addBookToLibrary, loading: addingToLibrary } = useApi(library.addBookToLibrary);

  useEffect(() => {
    fetchBook();
    if (user?.data?.id) {
      fetchLibraries();
    }
  }, [id, user?.data?.id]);

  const handleCreateLibrary = async () => {
    if (!newLibraryName.trim()) {
      Alert.alert('Error', 'Please enter a library name');
      return;
    }

    try {
      const libraryData = {
        name: newLibraryName.trim(),
        type: libraryType,
        userId: user.data.id
      };

      const newLibrary = await createLibrary(libraryData);
      setNewLibraryName('');
      
      // Add the book to the newly created library
      await addBookToLibrary({
        libraryId: newLibrary.id,
        bookId: parseInt(id)
      });
      
      fetchLibraries();
      setIsFolderModalVisible(false);
      Alert.alert('Success', 'Library created and book added successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to create library. Please try again.');
    }
  };

  const handleAddToLibrary = async (libraryId) => {
    try {
      await addBookToLibrary({
        libraryId: libraryId,
        bookId: parseInt(id)
      });
      setIsFolderModalVisible(false);
      Alert.alert('Success', 'Book added to library successfully');
    } catch (error) {
      if (error.response?.data?.error === 'Book is already in this library') {
        Alert.alert('Already Added', 'This book is already in this library');
      } else {
        Alert.alert('Error', 'Failed to add book to library. Please try again.');
      }
    }
  };

  const handleWriteReview = () => {
    router.push(`/review/${id}`);
  };

  const renderLibrary = ({ item }) => (
    <Card
      variant="compact"
      title={item.name}
      onPress={() => handleAddToLibrary(item.id)}
      style={styles.libraryItem}
    >
      <View style={styles.libraryInfo}>
        <Ionicons 
          name={item.type === 'READ' ? 'book' : item.type === 'WANT_TO_READ' ? 'bookmark' : 'folder'} 
          size={20} 
          color="#666" 
        />
        <Text style={styles.bookCount}>
          {item._count?.entries || 0} books
        </Text>
      </View>
    </Card>
  );

  const renderReview = ({ item }) => (
    <Card style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <Text style={styles.reviewerName}>{item.user.username}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{item.rating.toFixed(1)}</Text>
        </View>
      </View>
      <Text style={styles.reviewText}>{item.text}</Text>
      {item.moods?.length > 0 && (
        <View style={styles.tagsContainer}>
          {item.moods.map((mood) => (
            <View key={mood.id} style={styles.tag}>
              <Text style={styles.tagText}>{mood.name}</Text>
            </View>
          ))}
        </View>
      )}
      <Text style={styles.reviewDate}>
        {new Date(item.createdAt).toLocaleDateString()}
      </Text>
    </Card>
  );

  if (bookLoading) {
    return <LoadingScreen message="Loading book details..." />;
  }

  if (bookError) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="alert-circle-outline" size={64} color="#FF3B30" />
        <Text style={styles.errorText}>Failed to load book details</Text>
        <Button
          title="Try Again"
          onPress={fetchBook}
          style={styles.retryButton}
        />
      </View>
    );
  }

  if (!book) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="book-outline" size={64} color="#666" />
        <Text style={styles.errorText}>Book not found</Text>
        <Button
          title="Go Back"
          onPress={() => router.back()}
          style={styles.retryButton}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Button
            variant="secondary"
            size="small"
            title="Back"
            onPress={() => router.push('/')}
            style={styles.backButton}
          />
          {user && (
            <Button
              variant="secondary"
              size="small"
              title="Add to Library"
              onPress={() => setIsFolderModalVisible(true)}
              style={styles.addButton}
            />
          )}
        </View>

        <View style={styles.coverContainer}>
          <Image
            source={{ uri: book.coverUrl || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(book.title) + '&background=random' }}
            style={styles.coverImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>by {book.author}</Text>

          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={24} color="#FFD700" />
            <Text style={styles.rating}>
              {book.averageRating ? book.averageRating.toFixed(1) : 'N/A'}
            </Text>
            <Text style={styles.reviewCount}>
              ({book._count?.reviews || 0} reviews)
            </Text>
          </View>

          <View style={styles.metaContainer}>
            {book.pages && (
              <View style={styles.metaItem}>
                <Ionicons name="book-outline" size={20} color="#666" />
                <Text style={styles.metaText}>{book.pages} pages</Text>
              </View>
            )}
            {book.publishDate && (
              <View style={styles.metaItem}>
                <Ionicons name="calendar-outline" size={20} color="#666" />
                <Text style={styles.metaText}>
                  {new Date(book.publishDate).getFullYear()}
                </Text>
              </View>
            )}
            {book.language && (
              <View style={styles.metaItem}>
                <Ionicons name="language-outline" size={20} color="#666" />
                <Text style={styles.metaText}>{book.language}</Text>
              </View>
            )}
          </View>

          {book.genres?.length > 0 && (
            <View style={styles.tagsContainer}>
              {book.genres.map((genre) => (
                <View key={genre.id} style={styles.tag}>
                  <Text style={styles.tagText}>{genre.name}</Text>
                </View>
              ))}
            </View>
          )}

          {book.description && (
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionTitle}>Description</Text>
              <Text style={styles.description}>{book.description}</Text>
            </View>
          )}

          {user && (
            <View style={styles.actionButtons}>
              <Button
                variant="secondary"
                title="Write Review"
                onPress={handleWriteReview}
                style={styles.actionButton}
              />
            </View>
          )}

          <View style={styles.reviewsSection}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            {book.reviews?.length > 0 ? (
              <FlatList
                data={book.reviews}
                renderItem={renderReview}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
              />
            ) : (
              <Text style={styles.noReviews}>No reviews yet</Text>
            )}
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={isFolderModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsFolderModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add to Library</Text>
              <Button
                variant="secondary"
                size="small"
                title="Close"
                onPress={() => setIsFolderModalVisible(false)}
                style={styles.closeButton}
              />
            </View>

            <ScrollView style={styles.modalScrollView}>
              <View style={styles.createLibrarySection}>
                <Text style={styles.sectionTitle}>Create New Library</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Library name"
                    value={newLibraryName}
                    onChangeText={setNewLibraryName}
                  />
                  <Button
                    title="Create"
                    onPress={handleCreateLibrary}
                    loading={creatingLibrary}
                    style={styles.createButton}
                  />
                </View>
              </View>

              <View style={styles.existingLibrariesSection}>
                <Text style={styles.sectionTitle}>Existing Libraries</Text>
                {libraries?.map((library) => (
                  <Card
                    key={library.id}
                    variant="compact"
                    title={library.name}
                    onPress={() => handleAddToLibrary(library.id)}
                    style={styles.libraryItem}
                  >
                    <View style={styles.libraryInfo}>
                      <Ionicons 
                        name={library.type === 'READ' ? 'book' : library.type === 'WANT_TO_READ' ? 'bookmark' : 'folder'} 
                        size={20} 
                        color="#666" 
                      />
                      <Text style={styles.bookCount}>
                        {library.entries?.length || 0} books
                      </Text>
                    </View>
                  </Card>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
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
    padding: 16,
  },
  backButton: {
    marginRight: 8,
  },
  addButton: {
    marginLeft: 8,
  },
  coverContainer: {
    alignItems: 'center',
    padding: 16,
  },
  coverImage: {
    width: 200,
    height: 300,
    borderRadius: 8,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  author: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  reviewCount: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  metaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 8,
  },
  metaText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 14,
    color: '#666',
  },
  descriptionContainer: {
    marginBottom: 24,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  actionButtons: {
    marginBottom: 24,
  },
  actionButton: {
    width: '100%',
  },
  reviewsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  reviewCard: {
    marginBottom: 16,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  reviewDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  noReviews: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  modalScrollView: {
    maxHeight: '100%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    marginLeft: 10,
  },
  createLibrarySection: {
    marginBottom: 20,
  },
  existingLibrariesSection: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  createButton: {
    minWidth: 100,
  },
  libraryItem: {
    marginBottom: 10,
  },
  libraryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  bookCount: {
    marginLeft: 5,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  retryButton: {
    minWidth: 120,
  },
});