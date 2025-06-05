const express = require('express');
const router = express.Router();
const libraryEntryController = require('../controllers/libraryEntryController');

/**
 * @swagger
 * tags:
 *   name: Library Entries
 *   description: Library entry management endpoints
 */

/**
 * @swagger
 * /api/library-entries:
 *   post:
 *     summary: Add a book to a library
 *     tags: [Library Entries]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - libraryId
 *               - bookId
 *             properties:
 *               libraryId:
 *                 type: integer
 *               bookId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Book added to library
 *       400:
 *         description: Bad request
 */
router.post('/', libraryEntryController.addBookToLibrary);

/**
 * @swagger
 * /api/library-entries/library/{libraryId}:
 *   get:
 *     summary: Get all entries in a library
 *     tags: [Library Entries]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: libraryId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Library ID
 *     responses:
 *       200:
 *         description: List of library entries
 *       400:
 *         description: Bad request
 */
router.get('/library/:libraryId', libraryEntryController.getLibraryEntries);

/**
 * @swagger
 * /api/library-entries/{id}:
 *   get:
 *     summary: Get a specific library entry
 *     tags: [Library Entries]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Library entry ID
 *     responses:
 *       200:
 *         description: Library entry found
 *       404:
 *         description: Library entry not found
 */
router.get('/:id', libraryEntryController.getLibraryEntry);

/**
 * @swagger
 * /api/library-entries/{id}:
 *   delete:
 *     summary: Remove a book from a library
 *     tags: [Library Entries]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Library entry ID
 *     responses:
 *       204:
 *         description: Book removed from library
 *       400:
 *         description: Bad request
 */
router.delete('/:id', libraryEntryController.removeBookFromLibrary);

module.exports = router; 