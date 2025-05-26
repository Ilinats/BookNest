const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

/**
 * @swagger
 * tags:
 *   name: Genres
 *   description: Book genre management endpoints
 */

/**
 * @swagger
 * /api/genres:
 *   post:
 *     summary: Create a new genre
 *     tags: [Genres]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Genre created
 *       400:
 *         description: Bad request
 */
router.post('/', genreController.createGenre);

/**
 * @swagger
 * /api/genres:
 *   get:
 *     summary: Get all genres
 *     tags: [Genres]
 *     responses:
 *       200:
 *         description: List of genres
 *       400:
 *         description: Bad request
 */
router.get('/', genreController.getAllGenres);

/**
 * @swagger
 * /api/genres/{id}:
 *   get:
 *     summary: Get a specific genre
 *     tags: [Genres]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Genre ID
 *     responses:
 *       200:
 *         description: Genre found
 *       404:
 *         description: Genre not found
 */
router.get('/:id', genreController.getGenre);

/**
 * @swagger
 * /api/genres/{id}:
 *   put:
 *     summary: Update a genre
 *     tags: [Genres]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Genre ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Genre updated
 *       400:
 *         description: Bad request
 */
router.put('/:id', genreController.updateGenre);

/**
 * @swagger
 * /api/genres/{id}:
 *   delete:
 *     summary: Delete a genre
 *     tags: [Genres]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Genre ID
 *     responses:
 *       204:
 *         description: Genre deleted
 *       400:
 *         description: Bad request
 */
router.delete('/:id', genreController.deleteGenre);

module.exports = router; 