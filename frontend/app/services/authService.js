import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const API_URL = 'https://booknest-8vzt.onrender.com/api';
const API_URL = 'http://localhost:3000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

class AuthService {
  async login(credentials) {
    try {
      const response = await api.post('/auth/login', credentials);
      if (response.data.token) {
        // Store the token in AsyncStorage
        await this.storeToken(response.data.token);
        console.log('Token stored successfully');
      }
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async signup(credentials) {
    try {
      const response = await api.post('/auth/register', credentials);
      if (response.data.token) {
        // Store the token in AsyncStorage
        await this.storeToken(response.data.token);
      }
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async logout() {
    try {
      await this.removeToken();
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async storeToken(token) {
    try {
      await AsyncStorage.setItem('userToken', token);
    } catch (error) {
      console.error('Error storing token:', error);
    }
  }

  async removeToken() {
    try {
      await AsyncStorage.removeItem('userToken');
    } catch (error) {
      console.error('Error removing token:', error);
    }
  }

  handleError(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.message || 'An error occurred');
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('No response from server');
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error('Error setting up request');
    }
  }
}

export const authService = new AuthService(); 