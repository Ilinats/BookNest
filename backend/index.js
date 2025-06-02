const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { specs, swaggerUi } = require('./config/swagger');
const config = require('./config/config');
const { limiter, authLimiter } = require('./middleware/rateLimiter');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const libraryRoutes = require('./routes/libraryRoutes');
const libraryEntryRoutes = require('./routes/libraryEntryRoutes');
const moodRoutes = require('./routes/moodRoutes');
const tropeRoutes = require('./routes/tropeRoutes');
const genreRoutes = require('./routes/genreRoutes');
const friendshipRoutes = require('./routes/friendshipRoutes');
const readingChallengeRoutes = require('./routes/readingChallengeRoutes');
const challengeEntryRoutes = require('./routes/challengeEntryRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const { authenticate } = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Initialize Prisma
const prisma = new PrismaClient();

// Apply middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for Swagger UI
}));
app.use(cors(config.cors));
app.use(compression());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add Prisma to request
app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(specs, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "BookNest API Documentation",
  swaggerOptions: {
    persistAuthorization: true,
    docExpansion: 'none',
    filter: true,
    showCommonExtensions: true,
  }
}));

// Root route
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: "Welcome to BookNest API",
    documentation: `${req.protocol}://${req.get('host')}/api-docs`,
    version: config.api.version
  });
});

// Mount routes
app.use('/api/auth', authRoutes);

// Protected routes
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

// Error handling
app.use(errorHandler);

// Only start the server if not in production (Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(config.port, (error) => {
    if (!error) {
      console.log(`Server is running in ${config.nodeEnv} mode on port ${config.port}`);
      console.log(`API endpoints available at http://localhost:${config.port}${config.api.prefix}`);
      console.log(`📚 API Documentation available at http://localhost:${config.port}/api-docs`);
    } else {
      console.error("Error occurred, server can't start", error);
    }
  });
}

// Export for Vercel
module.exports = app;