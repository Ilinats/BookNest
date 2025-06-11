import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter, useSegments } from 'expo-router';
import { useApp } from '../context/AppContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useApp();
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading) {
      const inAuthGroup = segments[0] === 'auth';
      if (!isAuthenticated && !inAuthGroup) {
        // Redirect to login if not authenticated
        router.replace('/auth/login');
      } else if (isAuthenticated && inAuthGroup) {
        // Redirect to home if authenticated and trying to access auth screens
        router.replace('/(tabs)');
      }
    }
  }, [isAuthenticated, loading, segments]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return children;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
}); 