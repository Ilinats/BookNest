const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The review ID
 *         userId:
 *           type: integer
 *           description: The ID of the user who wrote the review
 *         bookId:
 *           type: integer
 *           description: The ID of the reviewed book
 *         rating:
 *           type: number
 *           minimum: 1
 *           maximum: 5
 *           description: Rating given to the book (1-5)
 *         text:
 *           type: string
 *           description: Review text content
 *         pace:
 *           type: string
 *           enum: [FAST, MEDIUM, SLOW]
 *           description: Reading pace
 *         focus:
 *           type: string
 *           enum: [PLOT, CHARACTER, BOTH]
 *           description: Book focus
 *         lovable:
 *           type: boolean
 *           description: Whether the book was lovable
 *         contentWarnings:
 *           type: string
 *           description: Content warnings for the book
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When the review was created
 *         user:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             username:
 *               type: string
 *         book:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             title:
 *               type: string
 *             author:
 *               type: string
 *             coverUrl:
 *               type: string
 *         moods:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *         tropes:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *         genres:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *       example:
 *         id: 1
 *         userId: 1
 *         bookId: 1
 *         rating: 4.5
 *         text: "Amazing book with great character development!"
 *         pace: "MEDIUM"
 *         focus: "CHARACTER"
 *         lovable: true
 *         contentWarnings: "None"
 *         createdAt: "2024-01-15T10:30:00Z"
 *     
 *     ReviewInput:
 *       type: object
 *       required:
 *         - userId
 *         - bookId
 *         - rating
 *       properties:
 *         userId:
 *           type: integer
 *           description: The ID of the user writing the review
 *         bookId:
 *           type: integer
 *           description: The ID of the book being reviewed
 *         rating:
 *           type: number
 *           minimum: 1
 *           maximum: 5
 *           description: Rating given to the book (1-5)
 *         text:
 *           type: string
 *           description: Review text content
 *         pace:
 *           type: string
 *           enum: [FAST, MEDIUM, SLOW]
 *           description: Reading pace
 *         focus:
 *           type: string
 *           enum: [PLOT, CHARACTER, BOTH]
 *           description: Book focus
 *         lovable:
 *           type: boolean
 *           description: Whether the book was lovable
 *         contentWarnings:
 *           type: string
 *           description: Content warnings for the book
 *         moodIds:
 *           type: array
 *           items:
 *             type: integer
 *           description: Array of mood IDs
 *         tropeIds:
 *           type: array
 *           items:
 *             type: integer
 *           description: Array of trope IDs
 *         genreIds:
 *           type: array
 *           items:
 *             type: integer
 *           description: Array of genre IDs
 *       example:
 *         userId: 1
 *         bookId: 1
 *         rating: 4.5
 *         text: "Amazing book with great character development!"
 *         pace: "MEDIUM"
 *         focus: "CHARACTER"
 *         lovable: true
 *         contentWarnings: "None"
 *         moodIds: [1, 2]
 *         tropeIds: [1]
 *         genreIds: [1, 2]
 *     
 *     ReviewUpdate:
 *       type: object
 *       properties:
 *         rating:
 *           type: number
 *           minimum: 1
 *           maximum: 5
 *           description: Rating given to the book (1-5)
 *         text:
 *           type: string
 *           description: Review text content
 *         pace:
 *           type: string
 *           enum: [FAST, MEDIUM, SLOW]
 *           description: Reading pace
 *         focus:
 *           type: string
 *           enum: [PLOT, CHARACTER, BOTH]
 *           description: Book focus
 *         lovable:
 *           type: boolean
 *           description: Whether the book was lovable
 *         contentWarnings:
 *           type: string
 *           description: Content warnings for the book
 *         moodIds:
 *           type: array
 *           items:
 *             type: integer
 *           description: Array of mood IDs
 *         tropeIds:
 *           type: array
 *           items:
 *             type: integer
 *           description: Array of trope IDs
 *         genreIds:
 *           type: array
 *           items:
 *             type: integer
 *           description: Array of genre IDs
 *       example:
 *         rating: 5
 *         text: "Updated review - even better on second read!"
 *         pace: "FAST"
 *         moodIds: [1, 3]
 *     
 *     ReviewOptions:
 *       type: object
 *       properties:
 *         moods:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *         tropes:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *         genres:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *         paceOptions:
 *           type: array
 *           items:
 *             type: string
 *           enum: [FAST, MEDIUM, SLOW]
 *         focusOptions:
 *           type: array
 *           items:
 *             type: string
 *           enum: [PLOT, CHARACTER, BOTH]
 */

/**
 * @swagger
 * /api/reviews:
 *   get:
 *     summary: Get all reviews
 *     description: Retrieve a paginated list of reviews with optional filtering
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of reviews per page
 *       - in: query
 *         name: userId
 *         schema:
 *           type: integer
 *         description: Filter by user ID
 *       - in: query
 *         name: bookId
 *         schema:
 *           type: integer
 *         description: Filter by book ID
 *       - in: query
 *         name: minRating
 *         schema:
 *           type: number
 *         description: Minimum rating filter
 *       - in: query
 *         name: maxRating
 *         schema:
 *           type: number
 *         description: Maximum rating filter
 *       - in: query
 *         name: pace
 *         schema:
 *           type: string
 *           enum: [FAST, MEDIUM, SLOW]
 *         description: Filter by pace
 *       - in: query
 *         name: focus
 *         schema:
 *           type: string
 *           enum: [PLOT, CHARACTER, BOTH]
 *         description: Filter by focus
 *     responses:
 *       200:
 *         description: List of reviews retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     reviews:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Review'
 *                     pagination:
 *                       type: object
 *                       properties:
 *                         page:
 *                           type: integer
 *                         limit:
 *                           type: integer
 *                         total:
 *                           type: integer
 *                         pages:
 *                           type: integer
 *       500:
 *         description: Server error
 */
router.get('/', reviewController.getAllReviews);

/**
 * @swagger
 * /api/reviews/options:
 *   get:
 *     summary: Get review options
 *     description: Retrieve available options for creating/updating reviews (moods, tropes, genres, etc.)
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Review options retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/ReviewOptions'
 *       500:
 *         description: Server error
 */
router.get('/options', reviewController.getReviewOptions);

/**
 * @swagger
 * /api/reviews/{id}:
 *   get:
 *     summary: Get a review by ID
 *     description: Retrieve detailed information about a specific review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Review ID
 *     responses:
 *       200:
 *         description: Review retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Review'
 *       404:
 *         description: Review not found
 *       500:
 *         description: Server error
 */
router.get('/:id', reviewController.getReviewById);

/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Create a new review
 *     description: Create a new book review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReviewInput'
 *     responses:
 *       201:
 *         description: Review created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Review'
 *       400:
 *         description: Invalid input or user already reviewed this book
 *       404:
 *         description: User or book not found
 *       500:
 *         description: Server error
 */
router.post('/', reviewController.createReview);

/**
 * @swagger
 * /api/reviews/{id}:
 *   put:
 *     summary: Update a review
 *     description: Update an existing review
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Review ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReviewUpdate'
 *     responses:
 *       200:
 *         description: Review updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Review'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Review not found
 *       500:
 *         description: Server error
 */
router.put('/:id', reviewController.updateReview);

/**
 * @swagger
 * /api/reviews/{id}:
 *   delete:
 *     summary: Delete a review
 *     description: Delete a review and update book statistics
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Review ID
 *     responses:
 *       200:
 *         description: Review deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *       404:
 *         description: Review not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', reviewController.deleteReview);

/**
 * @swagger
 * /api/reviews/user/{userId}:
 *   get:
 *     summary: Get reviews by user
 *     description: Retrieve all reviews written by a specific user
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of reviews per page
 *     responses:
 *       200:
 *         description: User reviews retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     reviews:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Review'
 *                     pagination:
 *                       type: object
 *                       properties:
 *                         page:
 *                           type: integer
 *                         limit:
 *                           type: integer
 *                         total:
 *                           type: integer
 *                         pages:
 *                           type: integer
 *       500:
 *         description: Server error
 */
router.get('/user/:userId', reviewController.getReviewsByUser);

/**
 * @swagger
 * /api/reviews/book/{bookId}:
 *   get:
 *     summary: Get reviews by book
 *     description: Retrieve all reviews for a specific book
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Book ID
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of reviews per page
 *     responses:
 *       200:
 *         description: Book reviews retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     reviews:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Review'
 *                     pagination:
 *                       type: object
 *                       properties:
 *                         page:
 *                           type: integer
 *                         limit:
 *                           type: integer
 *                         total:
 *                           type: integer
 *                         pages:
 *                           type: integer
 *       500:
 *         description: Server error
 */
router.get('/book/:bookId', reviewController.getReviewsByBook);

/**
 * @swagger
 * /api/reviews/friends/{userId}:
 *   get:
 *     summary: Get reviews from user's friends
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user whose friends' reviews to get
 *     responses:
 *       200:
 *         description: List of reviews from friends
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 */
router.get('/friends/:userId', reviewController.getFriendReviews);

module.exports = router;