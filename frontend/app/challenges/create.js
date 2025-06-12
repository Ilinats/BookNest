import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { challenges } from '../services/api';
import { useApi } from '../hooks/useApi';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';

export default function CreateChallengeScreen() {
  const router = useRouter();
  const { user } = useApp();
  const [newChallenge, setNewChallenge] = useState({
    name: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    goal: '',
  });

  const { execute: createChallenge, loading: creatingChallenge } = useApi(
    challenges.create
  );

const handleCreateChallenge = async () => {
    console.log('Creating challenge with user:', user);
  console.log('Creating challenge with data:', {
    ...newChallenge,
    userId: user.data.id,
    goal: parseInt(newChallenge.goal)
  });
  
  if (!newChallenge.name || !newChallenge.goal) {
    Alert.alert('Error', 'Please fill in all required fields');
    return;
  }

  try {
    const result = await createChallenge({
      ...newChallenge,
      userId: user.data.id,
      goal: parseInt(newChallenge.goal)
    });
    console.log('Challenge created successfully:', result);
    router.push('/challenges');
  } catch (error) {
    console.error('Challenge creation failed:', error);
    Alert.alert('Error', 'Failed to create challenge');
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Create Challenge</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.label}>Challenge Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter challenge name"
            value={newChallenge.name}
            onChangeText={(text) => setNewChallenge({ ...newChallenge, name: text })}
          />

          <Text style={styles.label}>Goal (number of books)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your reading goal"
            value={newChallenge.goal}
            onChangeText={(text) => setNewChallenge({ ...newChallenge, goal: text })}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Start Date</Text>
          <TextInput
            style={styles.input}
            placeholder="YYYY-MM-DD"
            value={newChallenge.startDate}
            onChangeText={(text) => setNewChallenge({ ...newChallenge, startDate: text })}
          />

          <Text style={styles.label}>End Date</Text>
          <TextInput
            style={styles.input}
            placeholder="YYYY-MM-DD"
            value={newChallenge.endDate}
            onChangeText={(text) => setNewChallenge({ ...newChallenge, endDate: text })}
          />

          <Button
            title="Create Challenge"
            onPress={handleCreateChallenge}
            loading={creatingChallenge}
            style={styles.createButton}
          />
        </View>
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
  content: {
    flex: 1,
  },
  form: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  createButton: {
    marginTop: 16,
  },
}); 