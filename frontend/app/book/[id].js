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
  const [selectedFolder, setSelectedFolder] = useState(null);

  const { data: book, loading: bookLoading, error: bookError, execute: fetchBook } = useApi(books.getById);
  const { data: folders, loading: foldersLoading, error: foldersError, execute: fetchFolders } = useApi(library.getFolders);
  const { data: reviews, loading: reviewsLoading, error: reviewsError, execute: fetchReviews } = useApi(books.getReviews);
  const { execute: addBookToFolder, loading: addingToFolder } = useApi(library.addBookToFolder);
  const { execute: markAsRead, loading: markingAsRead } = useApi(books.markAsRead);

  useEffect(() => {
    fetchBook(id);
    fetchFolders();
    fetchReviews(id);
  }, [id]);

  const handleAddToFolder = async (folderId) => {
    try {
      await addBookToFolder({ folderId, bookId: id });
      setIsFolderModalVisible(false);
      Alert.alert('Success', 'Book added to folder successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to add book to folder. Please try again.');
    }
  };

  const handleMarkAsRead = async () => {
    try {
      await markAsRead(id);
      fetchBook(id);
      Alert.alert('Success', 'Book marked as read');
    } catch (error) {
      Alert.alert('Error', 'Failed to mark book as read. Please try again.');
    }
  };

  const handleWriteReview = () => {
    router.push(`/review/${id}`);
  };

  const renderFolderItem = ({ item }) => (
    <Card
      variant="compact"
      title={item.name}
      onPress={() => handleAddToFolder(item.id)}
      style={styles.folderItem}
    />
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
          onPress={() => fetchBook(id)}
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
            onPress={() => router.back()}
            style={styles.backButton}
          />
          <Button
            variant="secondary"
            size="small"
            title="Add to Folder"
            onPress={() => setIsFolderModalVisible(true)}
            style={styles.addButton}
          />
        </View>

        <View style={styles.coverContainer}>
          <Image
            source={{ uri: book.coverImage }}
            style={styles.coverImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>by {book.author}</Text>

          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={24} color="#FFD700" />
            <Text style={styles.rating}>{book.rating.toFixed(1)}</Text>
            <Text style={styles.reviewCount}>({book.reviewCount} reviews)</Text>
          </View>

          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Ionicons name="book-outline" size={20} color="#666" />
              <Text style={styles.metaText}>{book.pages} pages</Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="calendar-outline" size={20} color="#666" />
              <Text style={styles.metaText}>{book.publishedYear}</Text>
            </View>
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

          <Text style={styles.description}>{book.description}</Text>

          {user && (
            <View style={styles.actionButtons}>
              <Button
                title="Mark as Read"
                onPress={handleMarkAsRead}
                loading={markingAsRead}
                style={styles.actionButton}
              />
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
            {reviewsLoading ? (
              <LoadingScreen message="Loading reviews..." />
            ) : reviewsError ? (
              <Text style={styles.errorText}>Failed to load reviews</Text>
            ) : reviews?.length > 0 ? (
              <FlatList
                data={reviews}
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
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add to Folder</Text>
              <Button
                variant="secondary"
                size="small"
                title="Close"
                onPress={() => setIsFolderModalVisible(false)}
                style={styles.closeButton}
              />
            </View>

            {foldersLoading ? (
              <LoadingScreen message="Loading folders..." />
            ) : foldersError ? (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Failed to load folders</Text>
                <Button
                  title="Try Again"
                  onPress={fetchFolders}
                  style={styles.retryButton}
                />
              </View>
            ) : (
              <FlatList
                data={folders}
                renderItem={renderFolderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.folderList}
              />
            )}
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
    width: 200,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    width: 80,
  },
  addButton: {
    width: 120,
  },
  coverContainer: {
    alignItems: 'center',
    padding: 16,
  },
  coverImage: {
    width: 200,
    height: 300,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
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
    color: '#333',
    marginLeft: 8,
  },
  reviewCount: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  metaText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#666',
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 24,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  reviewsSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
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
    color: '#333',
  },
  reviewText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  noReviews: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeButton: {
    width: 80,
  },
  folderList: {
    paddingVertical: 8,
  },
  folderItem: {
    marginBottom: 8,
  },
}); 