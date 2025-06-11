import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, user } from '../services/api';

export function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      console.log('Token found:', !!token);
      
      if (token) {
        // Get user profile using the token
        const response = await user.getProfile();
        console.log('User profile response:', response);
        setCurrentUser(response);
      } else {
        console.log('No token found');
      }
    } catch (error) {
      console.error('Error loading user:', error);
      // If there's an error (like 401), remove the invalid token
      if (error.response?.status === 401) {
        await AsyncStorage.removeItem('userToken');
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await auth.login({ email, password });
      console.log('Login response:', response);
      
      const { token, user: userData } = response.data;
      await AsyncStorage.setItem('userToken', token);
      setCurrentUser(response); // Set the full response structure
      return userData;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await auth.register(userData);
      console.log('Register response:', response);
      
      const { token, user: newUser } = response.data;
      await AsyncStorage.setItem('userToken', token);
      setCurrentUser(response); // Set the full response structure
      return newUser;
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setCurrentUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const updateProfile = async (userData) => {
    try {
      const response = await user.updateProfile(userData);
      console.log('Update profile response:', response);
      
      setCurrentUser(response);
      return response.data;
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  };

  return {
    user: currentUser,
    loading,
    login,
    register,
    logout,
    updateProfile,
  };
}