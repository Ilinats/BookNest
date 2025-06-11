import { useLocalSearchParams, useRouter } from 'expo-router';
import { useAuth } from '../hooks/useAuth';
import { useState, useEffect } from 'react';
import { Alert, View, Text, TouchableOpacity, ActivityIndicator, ScrollView, RefreshControl, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApi } from '../hooks/useApi';
import { library } from '../services/api';

export default function LibraryDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { user, loading: userLoading } = useAuth();
  const [refreshing, setRefreshing] = useState(false);

  const { data: libraryData, loading: libraryLoading, error: libraryError, execute: fetchLibrary } = useApi(library.getLibrary);
  const { data: entries, loading: entriesLoading, error: entriesError, execute: fetchEntries } = useApi(library.getLibraryEntries);

  const { execute: removeBook, loading: removingBook } = useApi(library.removeBookFromLibrary);

  useEffect(() => {
    console.log('LibraryDetails mounted with ID:', id);
    console.log('User loading:', userLoading);
    console.log('User data:', user);
    
    if (!userLoading && user?.data?.data.id && id) {
      console.log('Fetching data with User ID:', user.data.data.id);
      console.log('Library ID:', id);
      fetchLibrary(id);
      fetchEntries(id);
    }
  }, [id, user?.data?.data.id, userLoading]);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      if (user?.data?.data.id && id) {
        await Promise.all([fetchLibrary(id), fetchEntries(id)]);
      }
    } catch (error) {
      console.error('Refresh error:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const handleRemoveBook = async (entryId) => {
    Alert.alert(
      'Remove Book',
      'Are you sure you want to remove this book from your library?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            // Focus returns to the remove button
            const removeButton = document.querySelector(`[data-entry-id="${entryId}"]`);
            if (removeButton) {
              removeButton.focus();
            }
          }
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            try {
              await removeBook(entryId);
              fetchEntries(id);
              Alert.alert('Success', 'Book removed from library');
            } catch (error) {
              Alert.alert('Error', 'Failed to remove book from library');
            }
          },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          // Focus returns to the remove button when dialog is dismissed
          const removeButton = document.querySelector(`[data-entry-id="${entryId}"]`);
          if (removeButton) {
            removeButton.focus();
          }
        }
      }
    );
  };

  if (userLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!user?.data?.data.id) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Please log in to view your libraries</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/login')}
        >
          <Text style={styles.buttonText}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (libraryLoading || entriesLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (libraryError || entriesError) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          {libraryError?.message || entriesError?.message || 'Failed to load library data'}
        </Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={onRefresh}
        >
          <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>{libraryData?.name}</Text>
      </View>

      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{entries?.length || 0}</Text>
            <Text style={styles.statLabel}>Books</Text>
          </View>
        </View>

        <View style={styles.booksContainer}>
          {entries?.map((entry) => (
            <TouchableOpacity
              key={entry.id}
              style={styles.bookCard}
              onPress={() => router.push(`/book/${entry.book.id}`)}
            >
              <Image
                source={{ uri: entry.book.coverUrl || entry.book.coverImage || 'https://via.placeholder.com/80x120' }}
                style={styles.bookCover}
                resizeMode="cover"
              />
              <View style={styles.bookInfo}>
                <Text style={styles.bookTitle} numberOfLines={2}>
                  {entry.book.title}
                </Text>
                <Text style={styles.bookAuthor} numberOfLines={1}>
                  {entry.book.author}
                </Text>
                <View style={styles.bookRating}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.ratingText}>
                    {entry.book.averageRating?.toFixed(1) || 'N/A'}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveBook(entry.id)}
                data-entry-id={entry.id}
                accessibilityLabel={`Remove ${entry.book.title} from library`}
                accessibilityHint="Double tap to remove this book from your library"
              >
                <Ionicons name="trash-outline" size={20} color="#FF3B30" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
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
    fontSize: 16,
    color: '#FF3B30',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  booksContainer: {
    padding: 16,
  },
  bookCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookCover: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  bookInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  bookRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    padding: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});