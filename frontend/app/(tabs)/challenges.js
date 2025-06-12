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
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { challenges } from '../services/api';
import { useApi } from '../hooks/useApi';
import { useApp } from '../context/AppContext';

export default function ChallengesScreen() {
  const router = useRouter();
  const { user } = useApp();
  const [activeTab, setActiveTab] = useState('current');

  const { data: currentChallenges, loading: currentLoading, error: currentError, execute: fetchCurrentChallenges } = useApi(
    challenges.getCurrent
  );

  const { data: pastChallenges, loading: pastLoading, error: pastError, execute: fetchPastChallenges } = useApi(
    challenges.getPast
  );

  useEffect(() => {
    fetchCurrentChallenges();
    fetchPastChallenges();
  }, []);

  useEffect(() => {
    if (currentError) {
      console.error('Current challenges error:', currentError);
      Alert.alert(
        'Error',
        'Failed to load current challenges. Please try again.',
        [
          {
            text: 'Retry',
            onPress: fetchCurrentChallenges,
          },
          {
            text: 'OK',
            style: 'cancel',
          },
        ]
      );
    }
  }, [currentError]);

  useEffect(() => {
    if (pastError) {
      console.error('Past challenges error:', pastError);
      Alert.alert(
        'Error',
        'Failed to load past challenges. Please try again.',
        [
          {
            text: 'Retry',
            onPress: fetchPastChallenges,
          },
          {
            text: 'OK',
            style: 'cancel',
          },
        ]
      );
    }
  }, [pastError]);

  const renderChallenge = (challenge) => (
    <TouchableOpacity 
      key={challenge.id}
      style={styles.challengeCard}
      onPress={() => router.push(`/challenge/${challenge.id}`)}>
      <Text style={styles.challengeTitle}>{challenge.title}</Text>
      <Text style={styles.challengeDescription}>
        {new Date(challenge.startDate).toLocaleDateString()} - {new Date(challenge.endDate).toLocaleDateString()}
      </Text>
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

  const challengesList = activeTab === 'current' 
    ? (Array.isArray(currentChallenges) ? currentChallenges : [])
    : (Array.isArray(pastChallenges) ? pastChallenges : []);

  const isLoading = activeTab === 'current' ? currentLoading : pastLoading;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Reading Challenges</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push('/challenges/create')}>
          <Ionicons name="add-circle" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'current' && styles.activeTab]}
          onPress={() => setActiveTab('current')}>
          <Text style={[styles.tabText, activeTab === 'current' && styles.activeTabText]}>
            Current
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'past' && styles.activeTab]}
          onPress={() => setActiveTab('past')}>
          <Text style={[styles.tabText, activeTab === 'past' && styles.activeTabText]}>
            Past
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
          </View>
        ) : challengesList.length > 0 ? (
          challengesList.map(renderChallenge)
        ) : (
          <View style={styles.emptyContainer}>
            <Ionicons name="trophy-outline" size={48} color="#666" />
            <Text style={styles.emptyText}>
              {activeTab === 'current' ? 'No active challenges' : 'No past challenges'}
            </Text>
            {activeTab === 'current' && (
              <TouchableOpacity
                style={styles.createButton}
                onPress={() => router.push('/challenges/create')}>
                <Text style={styles.createButtonText}>Create New Challenge</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    padding: 8,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
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
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
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
  loadingContainer: {
    paddingVertical: 40,
    alignItems: 'center',
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
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  createButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    width: '100%',
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 