const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { specs, swaggerUi } = require('./config/swagger');
const { authenticate } = require('./middleware/auth.js');
const cors = require('cors');
const config = require('./config/config');

const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const errorHandler = require('./middleware/errorHandler');
const readingChallengeRoutes = require('./routes/readingChallengeRoutes');
const friendshipRoutes = require('./routes/friendshipRoutes');
const libraryRoutes = require('./routes/libraryRoutes');
const challengeEntryRoutes = require('./routes/challengeEntryRoutes');
const tropeRoutes = require('./routes/tropeRoutes');
const genreRoutes = require('./routes/genreRoutes');
const moodRoutes = require('./routes/moodRoutes');
const libraryEntryRoutes = require('./routes/libraryEntryRoutes');
const authenticateRoutes = require('./routes/auth.js');

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// app.use(cors({
//   origin: '*', // or restrict to your frontend's origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   preflightContinue: true
// }));

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  },
  __internal: {
    engine: {
      connectionTimeout: 10000, // 10 seconds
      retryAttempts: 5, // Number of retry attempts
      retryDelay: 1000, // Delay between retries in milliseconds
    }
  }
});

// Test database connection
async function testConnection() {
  try {
    await prisma.$connect();
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
}

testConnection();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "BookNest API Documentation"
}));

app.use('/api/auth', authenticateRoutes);

app.use((req, res, next) => {
    req.prisma = prisma;
    next();
});

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome message
 *     description: Returns a welcome message for the API
 *     tags: [General]
 *     responses:
 *       200:
 *         description: Welcome message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Welcome to BookNest API"
 *                 documentation:
 *                   type: string
 *                   example: "http://localhost:3000/api-docs"
 *                 endpoints:
 *                   type: object
 *                   properties:
 *                     books:
 *                       type: string
 *                       example: "/api/books"
 *                     users:
 *                       type: string
 *                       example: "/api/users"
 *                     reviews:
 *                       type: string
 *                       example: "/api/reviews"
 */
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: "Welcome to BookNest API",
        documentation: `${req.protocol}://${req.get('host')}/api-docs`,
        endpoints: {
            books: "/api/books",
            users: "/api/users",
            reviews: "/api/reviews",
            challenges: "/api/reading-challenges",
            friends: "/api/friends",
            libraries: "/api/libraries",
            libraryEntries: "/api/library-entries",
            trope: "/api/trope",
            genre: "/api/genre",
            mood: "/api/mood"
        }
    });
});

app.use('/api/books', authenticate, bookRoutes);
app.use('/api/users', authenticate, userRoutes);
app.use('/api/libraries', authenticate, libraryRoutes);
app.use('/api/library-entries', authenticate, libraryEntryRoutes);
app.use('/api/moods', authenticate, moodRoutes);
app.use('/api/tropes', authenticate, tropeRoutes);
app.use('/api/genres', authenticate, genreRoutes);
app.use('/api/friendships', authenticate, friendshipRoutes);
app.use('/api/reading-challenges', authenticate, readingChallengeRoutes);
app.use('/api/challenge-entries', authenticate, challengeEntryRoutes);
app.use('/api/reviews', authenticate, reviewRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`API documentation available at http://localhost:${PORT}/api-docs`);
});