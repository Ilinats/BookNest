// Test environment setup
beforeAll(() => {
  process.env.NODE_ENV = 'test';
  process.env.JWT_SECRET = 'test-secret';
});

const challengeEntryController = require('../../controllers/challengeEntryController');
const challengeEntryService = require('../../services/challengeEntryService');

// Mock the challenge entry service
jest.mock('../../services/challengeEntryService', () => ({
  addBookToChallenge: jest.fn(),
  getChallengeEntries: jest.fn(),
  removeBookFromChallenge: jest.fn()
}));

describe('Challenge Entry Controller', () => {
  let mockReq;
  let mockRes;
  let mockNext;

  beforeEach(() => {
    mockReq = {
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

  describe('addBookToChallenge', () => {
    const mockEntryData = {
      challengeId: 1,
      bookId: 1,
    };

    it('should add a book to a challenge', async () => {
      mockReq.body = mockEntryData;
      const mockCreatedEntry = {
        id: 1,
        ...mockEntryData,
        book: {
          id: 1,
          title: 'Book 1',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      challengeEntryService.addBookToChallenge.mockResolvedValue(mockCreatedEntry);

      await challengeEntryController.addBookToChallenge(mockReq, mockRes, mockNext);

      expect(challengeEntryService.addBookToChallenge).toHaveBeenCalledWith(mockEntryData);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(mockCreatedEntry);
    });

    it('should handle errors', async () => {
      mockReq.body = mockEntryData;
      const error = new Error('Database error');
      challengeEntryService.addBookToChallenge.mockRejectedValue(error);

      await challengeEntryController.addBookToChallenge(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getChallengeEntries', () => {
    it('should return all entries for a challenge', async () => {
      const mockEntries = [
        {
          id: 1,
          challengeId: 1,
          bookId: 1,
          book: {
            id: 1,
            title: 'Book 1',
          },
        },
        {
          id: 2,
          challengeId: 1,
          bookId: 2,
          book: {
            id: 2,
            title: 'Book 2',
          },
        },
      ];

      mockReq.params.challengeId = '1';
      challengeEntryService.getChallengeEntries.mockResolvedValue(mockEntries);

      await challengeEntryController.getChallengeEntries(mockReq, mockRes, mockNext);

      expect(challengeEntryService.getChallengeEntries).toHaveBeenCalledWith(1);
      expect(mockRes.json).toHaveBeenCalledWith(mockEntries);
    });

    it('should handle errors', async () => {
      mockReq.params.challengeId = '1';
      const error = new Error('Database error');
      challengeEntryService.getChallengeEntries.mockRejectedValue(error);

      await challengeEntryController.getChallengeEntries(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('removeBookFromChallenge', () => {
    it('should remove a book from a challenge', async () => {
      mockReq.params.entryId = '1';
      const mockDeletedEntry = {
        id: 1,
        challengeId: 1,
        bookId: 1,
      };

      challengeEntryService.removeBookFromChallenge.mockResolvedValue(mockDeletedEntry);

      await challengeEntryController.removeBookFromChallenge(mockReq, mockRes, mockNext);

      expect(challengeEntryService.removeBookFromChallenge).toHaveBeenCalledWith(1);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Book removed from challenge successfully' });
    });

    it('should handle errors', async () => {
      mockReq.params.entryId = '1';
      const error = new Error('Database error');
      challengeEntryService.removeBookFromChallenge.mockRejectedValue(error);

      await challengeEntryController.removeBookFromChallenge(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});