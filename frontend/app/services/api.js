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
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
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
  getFolders: () => api.get('/api/library/folders'),
  createFolder: (folderData) => api.post('/api/library/folders', folderData),
  updateFolder: (folderId, folderData) => api.put(`/api/library/folders/${folderId}`, folderData),
  deleteFolder: (folderId) => api.delete(`/api/library/folders/${folderId}`),
  getFolderBooks: (folderId) => api.get(`/api/library/folders/${folderId}/books`),
  addBookToFolder: (folderId, bookId) => api.post(`/api/library/folders/${folderId}/books`, { bookId }),
  removeBookFromFolder: (folderId, bookId) => api.delete(`/api/library/folders/${folderId}/books/${bookId}`),
};

// Challenges endpoints
export const challenges = {
  getCurrent: () => api.get('/api/reading-challenges/current'),
  getPast: () => api.get('/api/reading-challenges/past'),
  create: (challengeData) => api.post('/api/reading-challenges', challengeData),
  updateProgress: (challengeId, progress) => api.put(`/api/reading-challenges/${challengeId}/progress`, progress),
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
};

export default api;