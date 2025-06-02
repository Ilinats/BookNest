const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { validateBook, validateBookUpdate } = require('../middleware/validation');
const { authenticate } = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Book management endpoints
 */

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books with filtering and search
 *     description: Retrieve a paginated list of books with optional search and filtering capabilities
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/Search'
 *       - $ref: '#/components/parameters/MinRating'
 *       - $ref: '#/components/parameters/MaxRating'
 *       - $ref: '#/components/parameters/MinPages'
 *       - $ref: '#/components/parameters/MaxPages'
 *       - $ref: '#/components/parameters/Language'
 *       - $ref: '#/components/parameters/Page'
 *       - $ref: '#/components/parameters/Limit'
 *     responses:
 *       200:
 *         description: Successfully retrieved books
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BooksResponse'
 *       400:
 *         description: Invalid query parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *     examples:
 *       search_example:
 *         summary: Search for books
 *         value:
 *           search: "gatsby"
 *           minRating: 4.0
 *           page: 1
 *           limit: 5
 */
router.get('/', bookController.getAllBooks);

/**
 * @swagger
 * /api/books/top-rated:
 *   get:
 *     summary: Get top rated books
 *     description: Retrieve a list of the highest rated books
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of books to return
 *     responses:
 *       200:
 *         description: Successfully retrieved top rated books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/top-rated', bookController.getTopRatedBooks);

/**
 * @swagger
 * /api/books/author/{author}:
 *   get:
 *     summary: Get books by author
 *     description: Retrieve all books by a specific author
 *     tags: [Books]
 *     parameters:
 *       - name: author
 *         in: path
 *         required: true
 *         description: Author name (partial match supported)
 *         schema:
 *           type: string
 *           example: "Fitzgerald"
 *     responses:
 *       200:
 *         description: Successfully retrieved books by author
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/author/:author', bookController.getBooksByAuthor);

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a new book
 *     description: Add a new book to the database
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookInput'
 *           examples:
 *             complete_book:
 *               summary: Complete book information
 *               value:
 *                 title: "The Great Gatsby"
 *                 author: "F. Scott Fitzgerald"
 *                 publishDate: "1925-04-10"
 *                 averageRating: 4.2
 *                 language: "English"
 *                 reviewCount: 150
 *                 pages: 180
 *                 description: "A classic American novel set in the Jazz Age"
 *                 coverUrl: "https://example.com/covers/great-gatsby.jpg"
 *             minimal_book:
 *               summary: Minimal required information
 *               value:
 *                 title: "1984"
 *                 author: "George Orwell"
 *                 pages: 328
 *     responses:
 *       201:
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Invalid input data or book already exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', authenticate, validateBook, bookController.createBook);

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     description: Retrieve detailed information about a specific book
 *     tags: [Books]
 *     parameters:
 *       - $ref: '#/components/parameters/BookId'
 *     responses:
 *       200:
 *         description: Successfully retrieved book
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookWithDetails'
 *       404:
 *         description: Book not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', bookController.getBookById);

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update a book
 *     description: Update an existing book's information
 *     tags: [Books]
 *     parameters:
 *       - $ref: '#/components/parameters/BookId'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookUpdate'
 *           examples:
 *             update_rating:
 *               summary: Update rating and review count
 *               value:
 *                 averageRating: 4.5
 *                 reviewCount: 200
 *             update_description:
 *               summary: Update description
 *               value:
 *                 description: "Updated description with more details"
 *     responses:
 *       200:
 *         description: Book updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Book not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/:id', authenticate, validateBookUpdate, bookController.updateBook);

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Delete a book
 *     description: Remove a book from the database (only if no related data exists)
 *     tags: [Books]
 *     parameters:
 *       - $ref: '#/components/parameters/BookId'
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 *       400:
 *         description: Cannot delete book with existing relations
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *             example:
 *               error: "Cannot delete book with existing reviews, library entries, or challenge entries. Please remove related data first."
 *       404:
 *         description: Book not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete('/:id', authenticate, bookController.deleteBook);

module.exports = router;