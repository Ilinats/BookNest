const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { specs, swaggerUi } = require('./config/swagger');
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middleware/errorHandler');

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
 */
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: "Welcome to BookNest API",
        documentation: `${req.protocol}://${req.get('host')}/api-docs`
    });
});

app.use('/api/books', bookRoutes);

app.use(errorHandler);

// app.use('*', (req, res) => {
//     res.status(404).json({ error: 'Route not found' });
// });

process.on('SIGINT', async () => {
    console.log('Shutting down gracefully...');
    await prisma.$disconnect();
    process.exit(0);
});

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is running on port ${PORT}`);
        console.log(`API endpoints available at http://localhost:${PORT}/api`);
        console.log(`📚 API Documentation available at http://localhost:${PORT}/api-docs`);
    } else {
        console.error("Error occurred, server can't start", error);
    }
);