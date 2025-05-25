const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
    req.prisma = prisma;
    next();
});

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to Book Management API" });
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
    } else {
        console.error("Error occurred, server can't start", error);
    }
});