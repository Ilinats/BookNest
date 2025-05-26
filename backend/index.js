const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { specs, swaggerUi } = require('./config/swagger');

const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const errorHandler = require('./middleware/errorHandler');
const challengeRoutes = require('./routes/readingChallengeRoutes');
const friendRoutes = require('./routes/friendshipRoutes');
const libraryRoutes = require('./routes/libraryRoutes');
const challengeEntryRoutes = require('./routes/challengeEntryRoutes');
const tropeRoutes = require('./routes/tropeRoutes');
const genreRoutes = require('./routes/genreRoutes');
const moodRoutes = require('./routes/moodRoutes');
const libraryEntryRoutes = require('./routes/libraryEntryRoutes');

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "BookNest API Documentation"
}));

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
            challenges: "/api/challenges",
            friends: "/api/friends",
            libraries: "/api/libraries",
            libraryEntries: "/api/library-entries",
            trope: "/api/trope",
            genre: "/api/genre",
            mood: "/api/mood"
        }
    });
});

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/api/friends', friendRoutes);
app.use('/api/libraries', libraryRoutes);
app.use('/api/library-entries', libraryEntryRoutes);
app.use('/api/trope', tropeRoutes);
app.use('/api/genre', genreRoutes);
app.use('/api/mood', moodRoutes);
app.use('/api/challenge-entries', challengeEntryRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`API documentation available at http://localhost:${PORT}/api-docs`);
});