const express = require('express');
const router = express.Router();
const tropeController = require('../controllers/tropeController');

/**
 * @swagger
 * tags:
 *   name: Tropes
 *   description: Book trope management endpoints
 */

/**
 * @swagger
 * /api/tropes:
 *   post:
 *     summary: Create a new trope
 *     tags: [Tropes]
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
 *         description: Trope created
 *       400:
 *         description: Bad request
 */
router.post('/', tropeController.createTrope);

/**
 * @swagger
 * /api/tropes:
 *   get:
 *     summary: Get all tropes
 *     tags: [Tropes]
 *     responses:
 *       200:
 *         description: List of tropes
 *       400:
 *         description: Bad request
 */
router.get('/', tropeController.getAllTropes);

/**
 * @swagger
 * /api/tropes/{id}:
 *   get:
 *     summary: Get a specific trope
 *     tags: [Tropes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Trope ID
 *     responses:
 *       200:
 *         description: Trope found
 *       404:
 *         description: Trope not found
 */
router.get('/:id', tropeController.getTrope);

/**
 * @swagger
 * /api/tropes/{id}:
 *   put:
 *     summary: Update a trope
 *     tags: [Tropes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Trope ID
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
 *         description: Trope updated
 *       400:
 *         description: Bad request
 */
router.put('/:id', tropeController.updateTrope);

/**
 * @swagger
 * /api/tropes/{id}:
 *   delete:
 *     summary: Delete a trope
 *     tags: [Tropes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Trope ID
 *     responses:
 *       204:
 *         description: Trope deleted
 *       400:
 *         description: Bad request
 */
router.delete('/:id', tropeController.deleteTrope);

module.exports = router; 