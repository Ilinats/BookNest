const ReviewService = require('../services/reviewService');

class ReviewController {
    constructor() {
        this.reviewService = null;
    }

    initializeService(prisma) {
        this.reviewService = new ReviewService(prisma);
    }

    getAllReviews = async (req, res, next) => {
        try {
            if (!this.reviewService) {
                this.initializeService(req.prisma);
            }

            const { page, limit, userId, bookId, minRating, maxRating, pace, focus } = req.query;
            const filters = { userId, bookId, minRating, maxRating, pace, focus };
            
            const result = await this.reviewService.getAllReviews(page, limit, filters);
            
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            next(error);
        }
    };

    getReviewById = async (req, res, next) => {
        try {
            if (!this.reviewService) {
                this.initializeService(req.prisma);
            }

            const { id } = req.params;
            const review = await this.reviewService.getReviewById(id);
            
            res.status(200).json({
                success: true,
                data: review
            });
        } catch (error) {
            next(error);
        }
    };

    createReview = async (req, res, next) => {
        try {
            if (!this.reviewService) {
                this.initializeService(req.prisma);
            }

            const review = await this.reviewService.createReview(req.body);
            
            res.status(201).json({
                success: true,
                message: 'Review created successfully',
                data: review
            });
        } catch (error) {
            next(error);
        }
    };

    updateReview = async (req, res, next) => {
        try {
            if (!this.reviewService) {
                this.initializeService(req.prisma);
            }

            const { id } = req.params;
            const review = await this.reviewService.updateReview(id, req.body);
            
            res.status(200).json({
                success: true,
                message: 'Review updated successfully',
                data: review
            });
        } catch (error) {
            next(error);
        }
    };

    deleteReview = async (req, res, next) => {
        try {
            if (!this.reviewService) {
                this.initializeService(req.prisma);
            }

            const { id } = req.params;
            const result = await this.reviewService.deleteReview(id);
            
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            next(error);
        }
    };

    getReviewsByUser = async (req, res, next) => {
        try {
            if (!this.reviewService) {
                this.initializeService(req.prisma);
            }

            const { userId } = req.params;
            const { page, limit } = req.query;
            const result = await this.reviewService.getReviewsByUser(userId, page, limit);
            
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            next(error);
        }
    };

    getReviewsByBook = async (req, res, next) => {
        try {
            if (!this.reviewService) {
                this.initializeService(req.prisma);
            }

            const { bookId } = req.params;
            const { page, limit } = req.query;
            const result = await this.reviewService.getReviewsByBook(bookId, page, limit);
            
            res.status(200).json({
                success: true,
                data: result
            });
        } catch (error) {
            next(error);
        }
    };

    getReviewOptions = async (req, res, next) => {
        try {
            if (!this.reviewService) {
                this.initializeService(req.prisma);
            }

            const options = await this.reviewService.getReviewOptions();
            
            res.status(200).json({
                success: true,
                data: options
            });
        } catch (error) {
            next(error);
        }
    };
}

module.exports = new ReviewController();