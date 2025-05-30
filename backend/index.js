const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { specs, swaggerUi } = require('./config/swagger');
const config = require('./config/config');
const { limiter, authLimiter } = require('./middleware/rateLimiter');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');

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

const { authenticate } = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const prisma = new PrismaClient();

// Security middleware
app.use(helmet());
app.use(cors(config.cors));
app.use(compression());
app.use(morgan('combined'));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
app.use(limiter);

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "BookNest API Documentation"
}));

// Prisma middleware
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
 */
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: "Welcome to BookNest API",
    documentation: `${req.protocol}://${req.get('host')}/api-docs`,
    version: config.api.version
  });
});

// Public routes (no authentication required)
app.use('/api/auth', authLimiter, authRoutes);

// Protected routes (authentication required)
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

// Error handling
app.use(errorHandler);

// 404 handler
// app.use('*', (req, res) => {
//   res.status(404).json({ error: 'Route not found' });
// });

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  await prisma.$disconnect();
  process.exit(0);
});

// Start server
app.listen(config.port, (error) => {
  if (!error) {
    console.log(`Server is running in ${config.nodeEnv} mode on port ${config.port}`);
    console.log(`API endpoints available at http://localhost:${config.port}${config.api.prefix}`);
    console.log(`📚 API Documentation available at http://localhost:${config.port}/api-docs`);
  } else {
    console.error("Error occurred, server can't start", error);
  }
});