import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const API_URL = 'http://booknest-8vzt.onrender.com';
const API_URL = 'http://localhost:3000';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      console.log('Token from storage:', token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log('Request headers:', config.headers);
      }
      return config;
    } catch (error) {
      console.error('Error getting token:', error);
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle 401 responses
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error('API error:', error.response?.data);
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem('userToken');
    }
    return Promise.reject(error);
  }
);

// Auth endpoints
export const auth = {
  login: (credentials) => api.post('/api/auth/login', credentials),
  register: (userData) => api.post('/api/auth/register', userData),
  logout: () => AsyncStorage.removeItem('userToken'),
};

// Book endpoints - Fixed parameter names and validation
export const books = {
  search: (query, filters = {}) => {
    // Validate and clean parameters
    const params = {
      search: query || '',  // Changed back to 'search' to match backend
      minPages: Math.max(0, parseInt(filters.minPages) || 0),
      maxPages: Math.min(10000, parseInt(filters.maxPages) || 1000),
      minRating: Math.max(0, Math.min(5, parseFloat(filters.minRating) || 0)),
      maxRating: Math.max(0, Math.min(5, parseFloat(filters.maxRating) || 5))
    };
    
    // Remove empty/invalid parameters
    Object.keys(params).forEach(key => {
      if (params[key] === '' || params[key] === null || params[key] === undefined) {
        delete params[key];
      }
    });
    
    return api.get('/api/books', { params });
  },
  
  getTopRated: (limit = 10) => api.get('/api/books/top-rated', { 
    params: { limit: Math.min(100, Math.max(1, parseInt(limit) || 10)) } 
  }),
  
  getById: (id) => api.get(`/api/books/${id}`),
  addReview: (bookId, review) => api.post(`/api/books/${bookId}/reviews`, review),
  markAsRead: (bookId) => api.post(`/api/books/${bookId}/read`),
};

// Library endpoints
export const library = {
  getUserLibraries: (userId) => api.get(`/api/libraries/user/${userId}`),
  createLibrary: (libraryData) => api.post('/api/libraries', libraryData),
  updateLibrary: (libraryId, libraryData) => api.put(`/api/libraries/${libraryId}`, libraryData),
  deleteLibrary: (libraryId) => api.delete(`/api/libraries/${libraryId}`),
  getLibrary: (libraryId) => api.get(`/api/libraries/${libraryId}`),
  getLibraryEntries: (libraryId) => api.get(`/api/library-entries/library/${libraryId}`),
  addBookToLibrary: (data) => api.post('/api/library-entries', data),
  removeBookFromLibrary: (entryId) => api.delete(`/api/library-entries/${entryId}`),
};

// Challenges endpoints
export const challenges = {
  getCurrent: () => api.get('/api/reading-challenges/current'),
  getPast: () => api.get('/api/reading-challenges/past'),
  create: (challengeData) => api.post('/api/reading-challenges', challengeData),
  updateProgress: (challengeId, progress) => api.put(`/api/reading-challenges/${challengeId}/progress`, progress),
  getChallenge: (id) => api.get(`/api/reading-challenges/${id}`),
};

// Friendships endpoints
export const friendships = {
  getUserFriendships: (userId) => api.get(`/api/friendships/user/${userId}`),
  createFriendship: (data) => api.post('/api/friendships', data),
};

// Challenge entries endpoints
export const challengeEntries = {
  getChallengeEntries: (challengeId) => api.get(`/api/challenge-entries/challenge/${challengeId}`),
  addBookToChallenge: (data) => api.post('/api/challenge-entries', data),
  removeBookFromChallenge: (entryId) => api.delete(`/api/challenge-entries/${entryId}`),
};

// User endpoints - Added error handling
export const user = {
  getProfile: () => api.get('/api/users/profile').catch(error => {
    console.error('Profile fetch error:', error);
    throw error;
  }),
  updateProfile: (profileData) => api.put('/api/users/profile', profileData),
  getReviews: () => api.get('/api/users/reviews').catch(error => {
    console.error('Reviews fetch error:', error);  
    throw error;
  }),
  searchByUsername: async (username) => {
    try {
      const response = await api.get(`/api/users/search?username=${username}`);
      return response;
    } catch (error) {
      console.error('Search by username error:', error);
      throw error;
    }
  }
};

export default api;