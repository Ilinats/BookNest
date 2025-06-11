import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  TextInput,
  Modal,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { library } from '../services/api';
import { useApi } from '../hooks/useApi';
import { useApp } from '../context/AppContext';

export default function LibraryScreen() {
  const router = useRouter();
  const { user } = useApp();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newLibraryName, setNewLibraryName] = useState('');
  const [libraryType, setLibraryType] = useState('CUSTOM');

  const { data: libraries, loading, execute: fetchLibraries } = useApi(library.getUserLibraries);
  const { execute: createLibrary } = useApi(library.createLibrary);
  const { execute: deleteLibrary } = useApi(library.deleteLibrary);

  useEffect(() => {
    if (user?.data?.id) {
      fetchLibraries(user.data.id);
    }
  }, [user?.data?.id]);

  const handleCreateLibrary = async () => {
    if (!newLibraryName.trim()) {
      Alert.alert('Error', 'Please enter a library name');
      return;
    }

    if (!user?.data?.id) {
      Alert.alert('Error', 'You must be logged in to create a library');
      return;
    }

    const payload = {
      name: newLibraryName.trim(),
      type: libraryType,
      userId: parseInt(user.data.id)
    };

    try {
      const result = await createLibrary(payload);
      setNewLibraryName('');
      setLibraryType('CUSTOM');
      setIsModalVisible(false);
      await fetchLibraries(user.data.id);
      Alert.alert('Success', 'Library created successfully!');
    } catch (error) {
      Alert.alert(
        'Error',
        `Failed to create library: ${error.response?.data?.message || error.message}`
      );
    }
  };

  const handleDeleteLibrary = async (libraryId) => {
    const confirmDelete = Platform.OS === 'web' 
      ? window.confirm('Are you sure you want to delete this library? This action cannot be undone.')
      : new Promise((resolve) => {
          Alert.alert(
            'Delete Library',
            'Are you sure you want to delete this library? This action cannot be undone.',
            [
              {
                text: 'Cancel',
                style: 'cancel',
                onPress: () => resolve(false)
              },
              {
                text: 'Delete',
                style: 'destructive',
                onPress: () => resolve(true)
              }
            ]
          );
        });

    if (confirmDelete) {
      try {
        await deleteLibrary(libraryId);
        if (user?.data?.id) {
          await fetchLibraries(user.data.id);
        }
      } catch (error) {
        console.error('Delete library error:', error);
        if (Platform.OS === 'web') {
          alert('Failed to delete library. Please try again.');
        } else {
          Alert.alert('Error', 'Failed to delete library. Please try again.');
        }
      }
    }
  };

  const renderLibrary = ({ item }) => (
    <TouchableOpacity
      style={styles.libraryCard}
      onPress={() => router.push(`/library/${item.id}`)}>
      <View style={styles.libraryIcon}>
        <Ionicons 
          name={getLibraryIcon(item.type)} 
          size={24} 
          color="#007AFF" 
        />
      </View>
      <View style={styles.libraryInfo}>
        <Text style={styles.libraryName}>{item.name}</Text>
        <Text style={styles.bookCount}>
          {item.entries?.length || 0} book{item.entries?.length !== 1 ? 's' : ''}
        </Text>
      </View>
      {item.type === 'CUSTOM' && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteLibrary(item.id)}>
          <Ionicons name="trash-outline" size={24} color="#FF3B30" />
        </TouchableOpacity>
      )}
      <Ionicons name="chevron-forward" size={24} color="#666" />
    </TouchableOpacity>
  );

  const getLibraryIcon = (type) => {
    switch (type) {
      case 'CURRENTLY_READING':
        return 'book';
      case 'PHYSICAL_TBR':
        return 'library';
      case 'WANT_TO_READ':
        return 'bookmark';
      case 'READ':
        return 'checkmark-circle';
      default:
        return 'folder';
    }
  };

  // Debug: Log when component renders
  console.log('LibraryScreen render - user:', user);
  console.log('LibraryScreen render - libraries:', libraries);

  if (loading && !libraries) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Loading libraries...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Library</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            console.log('Add button pressed - opening modal');
            setIsModalVisible(true);
          }}>
          <Ionicons name="add" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={libraries}
        renderItem={renderLibrary}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.libraryList}
        refreshing={loading}
        onRefresh={() => fetchLibraries(user.data.data.id)}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="library-outline" size={48} color="#666" />
            <Text style={styles.emptyText}>No libraries yet</Text>
            <Text style={styles.emptySubtext}>
              Create a new library to start organizing your books
            </Text>
          </View>
        }
      />

      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create New Library</Text>
            <TextInput
              style={styles.input}
              placeholder="Library name"
              value={newLibraryName}
              onChangeText={(text) => {
                console.log('Text input changed:', text);
                setNewLibraryName(text);
              }}
              autoFocus
            />
            
            {/* Debug info display */}
            <Text style={{ fontSize: 12, color: '#666', marginBottom: 10 }}>
              Debug: Name=`{newLibraryName}`, User={user?.id}
            </Text>
            
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  console.log('Cancel button pressed');
                  setIsModalVisible(false);
                }}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.createButton]}
                onPress={() => {
                  console.log('Create button pressed - calling handleCreateLibrary');
                  handleCreateLibrary();
                }}>
                <Text style={styles.createButtonText}>Create</Text>
              </TouchableOpacity>
            </View>
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
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    padding: 8,
  },
  libraryList: {
    padding: 16,
  },
  libraryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
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
  libraryIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  libraryInfo: {
    flex: 1,
  },
  libraryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  bookCount: {
    fontSize: 14,
    color: '#666',
  },
  deleteButton: {
    padding: 8,
    marginRight: 8,
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
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f8f9fa',
    marginRight: 8,
  },
  createButton: {
    backgroundColor: '#007AFF',
    marginLeft: 8,
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});