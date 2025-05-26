const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libraryController');

/**
 * @swagger
 * tags:
 *   name: Libraries
 *   description: User library management endpoints
 */

/**
 * @swagger
 * /api/libraries:
 *   post:
 *     summary: Create a new library
 *     tags: [Libraries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - userId
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [CURRENTLY_READING, PHYSICAL_TBR, WANT_TO_READ, READ, CUSTOM]
 *               userId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Library created
 *       400:
 *         description: Bad request
 */
router.post('/', libraryController.createLibrary);

/**
 * @swagger
 * /api/libraries/user/{userId}:
 *   get:
 *     summary: Get all libraries for a user
 *     tags: [Libraries]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: List of libraries
 *       400:
 *         description: Bad request
 */
router.get('/user/:userId', libraryController.getUserLibraries);

/**
 * @swagger
 * /api/libraries/{id}:
 *   get:
 *     summary: Get a specific library
 *     tags: [Libraries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Library ID
 *     responses:
 *       200:
 *         description: Library found
 *       404:
 *         description: Library not found
 */
router.get('/:id', libraryController.getLibrary);

/**
 * @swagger
 * /api/libraries/{id}:
 *   put:
 *     summary: Update a library
 *     tags: [Libraries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Library ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [CURRENTLY_READING, PHYSICAL_TBR, WANT_TO_READ, READ, CUSTOM]
 *     responses:
 *       200:
 *         description: Library updated
 *       400:
 *         description: Bad request
 */
router.put('/:id', libraryController.updateLibrary);

/**
 * @swagger
 * /api/libraries/{id}:
 *   delete:
 *     summary: Delete a library
 *     tags: [Libraries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Library ID
 *     responses:
 *       204:
 *         description: Library deleted
 *       400:
 *         description: Bad request
 */
router.delete('/:id', libraryController.deleteLibrary);

module.exports = router; 