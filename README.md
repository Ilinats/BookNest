# BookNest 📚

BookNest is a mobile application designed for book lovers who don't just read, but actively analyze, evaluate, and share their literary taste. The app provides a comprehensive platform for tracking reading progress, managing book collections, writing reviews, and connecting with fellow readers.

## 🌟 Features

- **Book Discovery**: Search and discover new books with detailed information
- **Reading Progress Tracking**: Monitor your reading journey and set goals
- **Personal Library Management**: Organize your book collection and wishlists
- **Reviews & Ratings**: Write detailed reviews and rate books you've read
- **Social Features**: Connect with other book lovers and share recommendations
- **Reading Analytics**: Get insights into your reading habits and preferences
- **Book Lending Tracker**: Keep track of books you've lent to friends

## 🚀 Live Demo

- **API Documentation**: [https://booknest-8vzt.onrender.com/api-docs/](https://booknest-8vzt.onrender.com/api-docs/)
- **GitHub Repository**: [https://github.com/Ilinats/BookNest](https://github.com/Ilinats/BookNest)

## 🏗️ Architecture

BookNest follows a modern mobile-first architecture with a RESTful API backend and a responsive frontend interface.

---

## 🔧 Backend

### Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostreSQL with Prisma ORM
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger
- **Deployment**: Render
- **Environment Management**: dotenv

### API Features

- **User Management**: Registration, authentication, and profile management
- **Book Operations**: CRUD operations for books, search, and filtering
- **Review System**: Create, read, update, and delete book reviews
- **Rating System**: Rate books and view aggregated ratings
- **Library Management**: Personal collections, wishlists, and reading lists
- **Social Features**: Follow users, share recommendations
- **Reading Progress**: Track reading status and progress

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ilinats/BookNest.git
   cd BookNest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=3000
   DATABASE_URL=your_url
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   ```
4. **Run the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

5. **API Documentation**
   Once the server is running, visit:
   - Local: `http://localhost:3000/api-docs`
   - Production: `https://booknest-8vzt.onrender.com/api-docs/`

### API Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

#### Books
- `GET /api/books` - Get all books (with pagination and filtering)
- `GET /api/books/:id` - Get book by ID
- `POST /api/books` - Add new book
- `PUT /api/books/:id` - Update book
- `DELETE /api/books/:id` - Delete book
- `GET /api/books/search` - Search books

#### Reviews
- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/book/:bookId` - Get reviews for a specific book
- `POST /api/reviews` - Create new review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

#### User Library
- `GET /api/library` - Get user's library
- `POST /api/library` - Add book to library
- `PUT /api/library/:id` - Update reading status
- `DELETE /api/library/:id` - Remove book from library

### Database Schema

#### User Model
```javascript
{
  username: String,
  email: String,
  password: String, // hashed
  avatar: String,
  bio: String,
  readingGoal: Number,
  joinDate: Date,
  following: [ObjectId],
  followers: [ObjectId]
}
```

#### Book Model
```javascript
{
  title: String,
  author: String,
  isbn: String,
  genre: [String],
  description: String,
  coverImage: String,
  publishedDate: Date,
  pageCount: Number,
  language: String,
  averageRating: Number,
  ratingsCount: Number
}
```

#### Review Model
```javascript
{
  user: ObjectId,
  book: ObjectId,
  rating: Number,
  title: String,
  content: String,
  dateCreated: Date,
  dateModified: Date,
  likes: [ObjectId],
  helpful: Number
}
```

---

## 🎨 Frontend

### Technology Stack

- **Framework**: React Native
- **State Management**: Context API
- **Navigation**: React Navigation
- **HTTP Client**: Axios
- **Image Handling**: React Native Image Picker
- **Local Storage**: AsyncStorage

### Frontend Features

- **Responsive Design**: Optimized for mobile devices
- **Social Sharing**: Share reviews and recommendations
- **Search & Filter**: Advanced book search capabilities

### Frontend Setup

1. **Prerequisites**
   ```bash
   # For React Native
   npm install -g react-native-cli
   
   ```

2. **Install dependencies**
   ```bash
   # Navigate to frontend directory
   cd frontend
   
   # Install packages
   npm install
   ```

3. **Environment Configuration**
   Create a `config.js` file:
   ```javascript
   export const API_BASE_URL = __DEV__ 
     ? 'http://localhost:3000/api'
     : 'https://booknest-8vzt.onrender.com/api';
   ```

4. **Run the application**
   ```bash
   # React Native
   npx react-native run-android
   npx react-native run-ios

   ```

### Key Components

#### Authentication Flow
- Login/Register screens
- JWT token management
- Secure storage for user credentials

#### Book Management
- Book search and discovery
- Detailed book information display
- Add to library functionality

#### Reading Tracker
- Progress tracking interface
- Reading statistics dashboard
- Goal setting and achievement

#### Social Features
- User profiles and following system
- Review feed and interactions
- Recommendation engine

---

## 🚀 Deployment

### Backend Deployment (Render)

1. **Connect GitHub Repository**
   - Link your GitHub repository to Render
   - Configure auto-deploy on push to main branch

2. **Environment Variables**
   Set the following in Render dashboard:
   ```
   NODE_ENV=production
   DATABASE_URL=your_database_rul
   JWT_SECRET=your_production_jwt_secret
   ```

3. **Build Settings**
   ```
   Build Command: npm install
   Start Command: npm start
   ```
## 🧪 Testing

### Backend Testing
```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run integration tests
npm run test:integration
```

**Happy Reading! 📖✨**
