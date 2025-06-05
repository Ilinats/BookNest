const express = require('express');
const router = express.Router();
const challengeEntryController = require('../controllers/challengeEntryController');

/**
 * @swagger
 * tags:
 *   name: Challenge Entries
 *   description: Reading challenge entry management endpoints
 */

/**
 * @swagger
 * /api/challenge-entries:
 *   post:
 *     summary: Add a book to a reading challenge
 *     tags: [Challenge Entries]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - challengeId
 *               - bookId
 *             properties:
 *               challengeId:
 *                 type: integer
 *               bookId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Book added to challenge
 *       400:
 *         description: Bad request
 */
router.post('/', challengeEntryController.addBookToChallenge);

/**
 * @swagger
 * /api/challenge-entries/challenge/{challengeId}:
 *   get:
 *     summary: Get all entries in a challenge
 *     tags: [Challenge Entries]
 *     parameters:
 *       - in: path
 *         name: challengeId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Challenge ID
 *     responses:
 *       200:
 *         description: List of challenge entries
 *       400:
 *         description: Bad request
 */
router.get('/challenge/:challengeId', challengeEntryController.getChallengeEntries);

/**
 * @swagger
 * /api/challenge-entries/{id}:
 *   get:
 *     summary: Get a specific challenge entry
 *     tags: [Challenge Entries]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Entry ID
 *     responses:
 *       200:
 *         description: Challenge entry found
 *       404:
 *         description: Entry not found
 */
router.get('/:id', challengeEntryController.getChallengeEntry);

/**
 * @swagger
 * /api/challenge-entries/{id}:
 *   delete:
 *     summary: Remove a book from a challenge
 *     tags: [Challenge Entries]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Entry ID
 *     responses:
 *       204:
 *         description: Book removed from challenge
 *       400:
 *         description: Bad request
 */
router.delete('/:id', challengeEntryController.removeBookFromChallenge);

module.exports = router; 