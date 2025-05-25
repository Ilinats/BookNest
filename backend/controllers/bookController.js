const bookService = require('../services/bookService');

const getAllBooks = async (req, res, next) => {
    try {
        const {
            search,
            minRating,
            maxRating,
            minPages,
            maxPages,
            language,
            page = 1,
            limit = 10
        } = req.query;

        const filters = {
            search,
            minRating: minRating ? parseFloat(minRating) : undefined,
            maxRating: maxRating ? parseFloat(maxRating) : undefined,
            minPages: minPages ? parseInt(minPages) : undefined,
            maxPages: maxPages ? parseInt(maxPages) : undefined,
            language,
            page: parseInt(page),
            limit: parseInt(limit)
        };

        const result = await bookService.getAllBooks(req.prisma, filters);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

const getBookById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const bookId = parseInt(id);

        if (isNaN(bookId)) {
            return res.status(400).json({ error: 'Invalid book ID' });
        }

        const book = await bookService.getBookById(req.prisma, bookId);

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        res.json(book);
    } catch (error) {
        next(error);
    }
};

const createBook = async (req, res, next) => {
    try {
        const bookData = req.body;
        const book = await bookService.createBook(req.prisma, bookData);
        res.status(201).json(book);
    } catch (error) {
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'A book with this information already exists' });
        }
        next(error);
    }
};

const updateBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        
        const book = await bookService.updateBook(req.prisma, parseInt(id), updateData);
        
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        
        res.json(book);
    } catch (error) {
        next(error);
    }
};

const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await bookService.deleteBook(req.prisma, parseInt(id));
        
        if (!result.success) {
            return res.status(result.statusCode).json({ error: result.message });
        }
        
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        next(error);
    }
};

const getBooksByAuthor = async (req, res, next) => {
    try {
        const { author } = req.params;
        const books = await bookService.getBooksByAuthor(req.prisma, author);
        res.json(books);
    } catch (error) {
        next(error);
    }
};

const getTopRatedBooks = async (req, res, next) => {
    try {
        const { limit = 10 } = req.query;
        const books = await bookService.getTopRatedBooks(req.prisma, parseInt(limit));
        res.json(books);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
    getBooksByAuthor,
    getTopRatedBooks
};