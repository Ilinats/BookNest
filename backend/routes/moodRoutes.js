const express = require('express');
const router = express.Router();
const moodController = require('../controllers/moodController');

/**
 * @swagger
 * tags:
 *   name: Moods
 *   description: Book mood management endpoints
 */

/**
 * @swagger
 * /api/moods:
 *   post:
 *     summary: Create a new mood
 *     tags: [Moods]
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
 *         description: Mood created
 *       400:
 *         description: Bad request
 */
router.post('/', moodController.createMood);

/**
 * @swagger
 * /api/moods:
 *   get:
 *     summary: Get all moods
 *     tags: [Moods]
 *     responses:
 *       200:
 *         description: List of moods
 *       400:
 *         description: Bad request
 */
router.get('/', moodController.getAllMoods);

/**
 * @swagger
 * /api/moods/{id}:
 *   get:
 *     summary: Get a specific mood
 *     tags: [Moods]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Mood ID
 *     responses:
 *       200:
 *         description: Mood found
 *       404:
 *         description: Mood not found
 */
router.get('/:id', moodController.getMood);

/**
 * @swagger
 * /api/moods/{id}:
 *   put:
 *     summary: Update a mood
 *     tags: [Moods]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Mood ID
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
 *         description: Mood updated
 *       400:
 *         description: Bad request
 */
router.put('/:id', moodController.updateMood);

/**
 * @swagger
 * /api/moods/{id}:
 *   delete:
 *     summary: Delete a mood
 *     tags: [Moods]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Mood ID
 *     responses:
 *       204:
 *         description: Mood deleted
 *       400:
 *         description: Bad request
 */
router.delete('/:id', moodController.deleteMood);

module.exports = router; 