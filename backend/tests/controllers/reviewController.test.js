const reviewController = require('../../controllers/reviewController');
const reviewService = require('../../services/reviewService');

// Mock the review service
jest.mock('../../services/reviewService');

describe('Review Controller', () => {
  let mockReq;
  let mockRes;
  let mockNext;

  beforeEach(() => {
    mockReq = {
      user: { id: 1 },
      params: {},
      body: {},
    };
    mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();
    jest.clearAllMocks();
  });

  describe('createReview', () => {
    const mockReviewData = {
      bookId: 1,
      rating: 4,
      comment: 'Great book!',
    };

    it('should create a new review', async () => {
      mockReq.body = mockReviewData;
      const mockCreatedReview = {
        id: 1,
        userId: 1,
        ...mockReviewData,
        createdAt: new Date(),
        updatedAt: new Date(),
        book: {
          id: 1,
          title: 'Test Book',
        },
        user: {
          id: 1,
          username: 'testuser',
        },
      };

      reviewService.createReview.mockResolvedValue(mockCreatedReview);

      await reviewController.createReview(mockReq, mockRes, mockNext);

      expect(reviewService.createReview).toHaveBeenCalledWith({
        userId: 1,
        ...mockReviewData,
      });
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(mockCreatedReview);
    });

    it('should handle errors', async () => {
      mockReq.body = mockReviewData;
      const error = new Error('Database error');
      reviewService.createReview.mockRejectedValue(error);

      await reviewController.createReview(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getBookReviews', () => {
    it('should return reviews for a book', async () => {
      const mockBookId = 1;
      mockReq.params.bookId = mockBookId;
      const mockReviews = [
        {
          id: 1,
          bookId: mockBookId,
          userId: 1,
          rating: 4,
          comment: 'Great book!',
          user: {
            id: 1,
            username: 'testuser',
          },
        },
      ];

      reviewService.getBookReviews.mockResolvedValue(mockReviews);

      await reviewController.getBookReviews(mockReq, mockRes, mockNext);

      expect(reviewService.getBookReviews).toHaveBeenCalledWith(mockBookId);
      expect(mockRes.json).toHaveBeenCalledWith(mockReviews);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      reviewService.getBookReviews.mockRejectedValue(error);

      await reviewController.getBookReviews(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getUserReviews', () => {
    it('should return reviews by the current user', async () => {
      const mockReviews = [
        {
          id: 1,
          bookId: 1,
          userId: 1,
          rating: 4,
          comment: 'Great book!',
          book: {
            id: 1,
            title: 'Test Book',
          },
        },
      ];

      reviewService.getUserReviews.mockResolvedValue(mockReviews);

      await reviewController.getUserReviews(mockReq, mockRes, mockNext);

      expect(reviewService.getUserReviews).toHaveBeenCalledWith(1);
      expect(mockRes.json).toHaveBeenCalledWith(mockReviews);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      reviewService.getUserReviews.mockRejectedValue(error);

      await reviewController.getUserReviews(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('updateReview', () => {
    const mockReviewId = 1;
    const mockUpdateData = {
      rating: 5,
      comment: 'Updated review',
    };

    it('should update a review', async () => {
      mockReq.params.id = mockReviewId;
      mockReq.body = mockUpdateData;
      const mockUpdatedReview = {
        id: mockReviewId,
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      reviewService.updateReview.mockResolvedValue(mockUpdatedReview);

      await reviewController.updateReview(mockReq, mockRes, mockNext);

      expect(reviewService.updateReview).toHaveBeenCalledWith(mockReviewId, mockUpdateData);
      expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedReview);
    });

    it('should handle errors', async () => {
      mockReq.params.id = mockReviewId;
      mockReq.body = mockUpdateData;
      const error = new Error('Database error');
      reviewService.updateReview.mockRejectedValue(error);

      await reviewController.updateReview(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
}); 