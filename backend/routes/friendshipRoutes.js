const express = require('express');
const router = express.Router();
const friendshipController = require('../controllers/friendshipController');

/**
 * @swagger
 * tags:
 *   name: Friendships
 *   description: User friendship management endpoints
 */

/**
 * @swagger
 * /api/friendships:
 *   post:
 *     summary: Create a new friendship
 *     tags: [Friendships]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - friendId
 *             properties:
 *               userId:
 *                 type: integer
 *               friendId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Friendship created
 *       400:
 *         description: Bad request
 */
router.post('/', friendshipController.sendFriendRequest);

/**
 * @swagger
 * /api/friendships/user/{userId}:
 *   get:
 *     summary: Get all friendships for a user
 *     tags: [Friendships]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: List of friendships
 *       400:
 *         description: Bad request
 */
router.get('/user/:userId', friendshipController.getUserFriends);

/**
 * @swagger
 * /api/friendships/{id}:
 *   get:
 *     summary: Get a specific friendship
 *     tags: [Friendships]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Friendship ID
 *     responses:
 *       200:
 *         description: Friendship found
 *       404:
 *         description: Friendship not found
 */
router.get('/:id', friendshipController.getFriendship);

/**
 * @swagger
 * /api/friendships/{id}:
 *   delete:
 *     summary: Delete a friendship
 *     tags: [Friendships]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Friendship ID
 *     responses:
 *       204:
 *         description: Friendship deleted
 *       400:
 *         description: Bad request
 */
router.delete('/:id', friendshipController.removeFriendship);

module.exports = router; 