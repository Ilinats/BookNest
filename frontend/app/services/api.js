import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const API_URL = 'http://booknest-8vzt.onrender.com';
const API_URL = 'http://localhost:3000';

const api = axios.create({
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

// Book endpoints
export const books = {
  search: (query, filters) => api.get('/api/books/search', { 
    params: { 
      search: query,
      minPages: filters?.minPages || 0,
      maxPages: filters?.maxPages || 1000,
      minRating: filters?.minRating || 0,
      maxRating: filters?.maxRating || 5
    } 
  }),
  getTopRated: (limit = 10) => api.get('/api/books/top-rated', { params: { limit } }),
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
  getCurrent: () => api.get('/api/challenges/current'),
  getPast: () => api.get('/api/challenges/past'),
  create: (challengeData) => api.post('/api/challenges', challengeData),
  updateProgress: (challengeId, progress) => api.put(`/api/challenges/${challengeId}/progress`, progress),
};

// User endpoints
export const user = {
  getProfile: () => api.get('/api/users/profile'),
  updateProfile: (profileData) => api.put('/api/users/profile', profileData),
  getReviews: () => api.get('/api/users/reviews'),
};

export default api; 