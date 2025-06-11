import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  Modal,
  TextInput,
  Image,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { challenges, challengeEntries } from '../services/api';
import { useApi } from '../hooks/useApi';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import api from '../services/api';

export default function ChallengeDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { user } = useApp();
  const [isAddBookModalVisible, setAddBookModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const { data: challenge, loading: challengeLoading, error: challengeError, execute: fetchChallenge } = useApi(
    () => challenges.getChallenge(id)
  );

  const { data: entries, loading: entriesLoading, error: entriesError, execute: fetchEntries } = useApi(
    () => challengeEntries.getChallengeEntries(id)
  );

  const { execute: addBookToChallenge, loading: addingBook } = useApi(
    (data) => challengeEntries.addBookToChallenge(data)
  );

  useEffect(() => {
    fetchChallenge();
    fetchEntries();
  }, [id]);

  useEffect(() => {
    if (challengeError) {
      Alert.alert('Error', 'Failed to load challenge details');
    }
  }, [challengeError]);

  useEffect(() => {
    if (entriesError) {
      Alert.alert('Error', 'Failed to load challenge books');
    }
  }, [entriesError]);

  const searchBooks = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    try {
      const response = await api.get('/api/books', {
        params: {
          search: query
        }
      });
      setSearchResults(response.data.books || []);
    } catch (error) {
      console.error('Error searching books:', error);
      setSearchResults([]);
      Alert.alert(
        'Error',
        'Failed to search books. Please try again.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleAddBook = async () => {
    if (!selectedBook) {
      Alert.alert('Error', 'Please select a book first');
      return;
    }

    try {
      await challengeEntries.addBookToChallenge({
        challengeId: id,
        bookId: selectedBook.id,
        finishedAt: new Date().toISOString()
      });
      
      fetchEntries();
      
      setAddBookModalVisible(false);
      setSelectedBook(null);
      setSearchQuery('');
      setSearchResults([]);
    } catch (error) {
      console.error('Error adding book to challenge:', error);
      Alert.alert(
        'Error',
        'Failed to add book to challenge. Please try again.',
        [{ text: 'OK' }]
      );
    }
  };

  const renderBook = (entry) => (
    <View key={entry.id} style={styles.bookCard}>
      <Image
        source={{ 
          uri: entry.book.coverUrl || entry.book.coverImage || 'https://via.placeholder.com/80x120' 
        }}
        style={styles.bookCover}
        resizeMode="cover"
      />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{entry.book.title}</Text>
        <Text style={styles.bookAuthor}>{entry.book.author}</Text>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => {
          Alert.alert(
            'Remove Book',
            'Are you sure you want to remove this book from the challenge?',
            [
              {
                text: 'Cancel',
                style: 'cancel'
              },
              {
                text: 'Remove',
                style: 'destructive',
                onPress: async () => {
                  try {
                    await challengeEntries.removeBookFromChallenge(entry.id);
                    fetchEntries();
                  } catch (error) {
                    Alert.alert('Error', 'Failed to remove book from challenge');
                  }
                }
              }
            ]
          );
        }}>
        <Ionicons name="close-circle" size={24} color="#FF3B30" />
      </TouchableOpacity>
    </View>
  );

  if (challengeLoading || entriesLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.title}>{challenge?.name}</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View 
            style={[
              styles.progressBar, 
              { width: `${Math.min(100, (challenge?.completed / challenge?.goal) * 100)}%` }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {challenge?.completed}/{challenge?.goal} books completed
        </Text>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          {new Date(challenge?.startDate).toLocaleDateString()} - {new Date(challenge?.endDate).toLocaleDateString()}
        </Text>
      </View>

      <View style={styles.booksHeader}>
        <Text style={styles.booksTitle}>Books</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setAddBookModalVisible(true)}>
          <Ionicons name="add-circle" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.booksList}>
        {entries?.length > 0 ? (
          entries.map(renderBook)
        ) : (
          <View style={styles.emptyContainer}>
            <Ionicons name="book-outline" size={48} color="#666" />
            <Text style={styles.emptyText}>No books added yet</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setAddBookModalVisible(true)}>
              <Text style={styles.addButtonText}>Add Books</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      <Modal
        visible={isAddBookModalVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add Book to Challenge</Text>
              <TouchableOpacity
                onPress={() => {
                  setAddBookModalVisible(false);
                  setSelectedBook(null);
                  setSearchQuery('');
                  setSearchResults([]);
                }}>
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search for a book..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={() => searchBooks(searchQuery)}
              />
              <TouchableOpacity
                style={styles.searchButton}
                onPress={() => searchBooks(searchQuery)}>
                <Ionicons name="search" size={24} color="#007AFF" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.searchResults}>
              {searchResults && searchResults.length > 0 ? (
                searchResults.map((book) => (
                  <TouchableOpacity
                    key={book.id}
                    style={styles.searchResultItem}
                    onPress={() => setSelectedBook(book)}
                  >
                    <View style={styles.searchResultContent}>
                      <Text style={styles.searchResultTitle}>{book.title}</Text>
                      <Text style={styles.searchResultAuthor}>{book.author}</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={24} color="#666" />
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={styles.noResults}>
                  {searchQuery.trim() ? 'No books found' : 'Start typing to search books'}
                </Text>
              )}
            </ScrollView>

            <Button
              title="Add Book"
              onPress={handleAddBook}
              disabled={!selectedBook}
              loading={addingBook}
              style={styles.addBookButton}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
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
  progressContainer: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
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
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  dateContainer: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  dateText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  booksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  booksTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  addButton: {
    padding: 8,
  },
  booksList: {
    flex: 1,
  },
  bookCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  bookCover: {
    width: 60,
    height: 90,
    borderRadius: 4,
    marginRight: 12,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    padding: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 16,
    marginBottom: 24,
  },
  addButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
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
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  searchButton: {
    padding: 8,
  },
  searchResults: {
    maxHeight: 300,
  },
  searchResultItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchResultContent: {
    flex: 1,
  },
  searchResultTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  searchResultAuthor: {
    fontSize: 14,
    color: '#666',
  },
  noResults: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
  },
  addBookButton: {
    marginTop: 16,
  },
}); 