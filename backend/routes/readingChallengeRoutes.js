const express = require('express');
const router = express.Router();
const readingChallengeController = require('../controllers/readingChallengeController');

/**
 * @swagger
 * tags:
 *   name: Reading Challenges
 *   description: Reading challenge management endpoints
 */

/**
 * @swagger
 * /api/challenges:
 *   post:
 *     summary: Create a new reading challenge
 *     tags: [Reading Challenges]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - startDate
 *               - endDate
 *               - goal
 *               - userId
 *             properties:
 *               name:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *               goal:
 *                 type: integer
 *               userId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Reading challenge created
 *       400:
 *         description: Bad request
 */
router.post('/', readingChallengeController.createChallenge);

/**
 * @swagger
 * /api/challenges/user/{userId}:
 *   get:
 *     summary: Get all challenges for a user
 *     tags: [Reading Challenges]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: List of reading challenges
 *       400:
 *         description: Bad request
 */
router.get('/user/:userId', readingChallengeController.getUserChallenges);

/**
 * @swagger
 * /api/challenges/{id}:
 *   get:
 *     summary: Get a specific challenge
 *     tags: [Reading Challenges]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Challenge ID
 *     responses:
 *       200:
 *         description: Challenge found
 *       404:
 *         description: Challenge not found
 */
router.get('/:id', readingChallengeController.getChallenge);

/**
 * @swagger
 * /api/challenges/{id}:
 *   put:
 *     summary: Update a challenge
 *     tags: [Reading Challenges]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Challenge ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *               goal:
 *                 type: integer
 *               completed:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Challenge updated
 *       400:
 *         description: Bad request
 */
router.put('/:id', readingChallengeController.updateChallenge);

/**
 * @swagger
 * /api/challenges/{id}:
 *   delete:
 *     summary: Delete a challenge
 *     tags: [Reading Challenges]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Challenge ID
 *     responses:
 *       204:
 *         description: Challenge deleted
 *       400:
 *         description: Bad request
 */
router.delete('/:id', readingChallengeController.deleteChallenge);

module.exports = router; 