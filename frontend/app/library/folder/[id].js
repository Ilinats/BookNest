import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { library } from '../../services/api';
import { useApi } from '../../hooks/useApi';

export default function FolderDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [folderName, setFolderName] = useState('');

  const { data: books, loading, execute: fetchBooks } = useApi(library.getFolderBooks);
  const { execute: removeBook } = useApi(library.removeBookFromFolder);

  useEffect(() => {
    fetchBooks(id);
  }, [id]);

  const handleRemoveBook = async (bookId) => {
    Alert.alert(
      'Remove Book',
      'Are you sure you want to remove this book from the folder?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            try {
              await removeBook({ folderId: id, bookId });
              fetchBooks(id);
            } catch (error) {
              // Error is handled by useApi hook
            }
          },
        },
      ]
    );
  };

  const renderBook = ({ item }) => (
    <TouchableOpacity
      style={styles.bookCard}
      onPress={() => router.push(`/book/${item.id}`)}>
      <Image
        source={{ uri: item.coverImage }}
        style={styles.bookCover}
        resizeMode="cover"
      />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
        <View style={styles.bookMeta}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{item.rating.toFixed(1)}</Text>
          </View>
          <Text style={styles.pages}>{item.pages} pages</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemoveBook(item.id)}>
        <Ionicons name="close-circle-outline" size={24} color="#FF3B30" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>{folderName}</Text>
        <View style={styles.placeholder} />
      </View>

      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.bookList}
        refreshing={loading}
        onRefresh={() => fetchBooks(id)}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="book-outline" size={48} color="#666" />
            <Text style={styles.emptyText}>No books in this folder yet</Text>
          </View>
        }
      />
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
    alignItems: 'center',
    padding: 16,
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
  bookList: {
    padding: 16,
  },
  bookCard: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
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
    color: '#333',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  bookMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  rating: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  pages: {
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
    paddingVertical: 32,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 12,
  },
}); 