const readingChallengeController = require('../../controllers/readingChallengeController');
const readingChallengeService = require('../../services/readingChallengeService');

// Mock the reading challenge service
jest.mock('../../services/readingChallengeService', () => ({
  createChallenge: jest.fn(),
  getChallengeById: jest.fn(),
  getUserChallenges: jest.fn(),
  updateChallenge: jest.fn(),
  deleteChallenge: jest.fn()
}));

describe('Reading Challenge Controller', () => {
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

  describe('createChallenge', () => {
    const mockChallengeData = {
      title: 'Summer Reading Challenge',
      description: 'Read 10 books this summer',
      startDate: '2024-06-01',
      endDate: '2024-08-31',
      targetBooks: 10,
    };

    it('should create a new challenge', async () => {
      mockReq.body = mockChallengeData;
      const mockCreatedChallenge = {
        id: 1,
        userId: 1,
        ...mockChallengeData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      readingChallengeService.createChallenge.mockResolvedValue(mockCreatedChallenge);

      await readingChallengeController.createChallenge(mockReq, mockRes, mockNext);

      expect(readingChallengeService.createChallenge).toHaveBeenCalledWith({
        userId: 1,
        ...mockChallengeData,
      });
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(mockCreatedChallenge);
    });

    it('should handle errors', async () => {
      mockReq.body = mockChallengeData;
      const error = new Error('Database error');
      readingChallengeService.createChallenge.mockRejectedValue(error);

      await readingChallengeController.createChallenge(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getChallenge', () => {
    it('should return a challenge by id', async () => {
      const mockChallenge = {
        id: 1,
        userId: 1,
        title: 'Summer Reading Challenge',
        description: 'Read 10 books this summer',
        startDate: '2024-06-01',
        endDate: '2024-08-31',
        targetBooks: 10,
      };

      mockReq.params.id = '1';
      readingChallengeService.getChallengeById.mockResolvedValue(mockChallenge);

      await readingChallengeController.getChallenge(mockReq, mockRes, mockNext);

      expect(readingChallengeService.getChallengeById).toHaveBeenCalledWith(1);
      expect(mockRes.json).toHaveBeenCalledWith(mockChallenge);
    });

    it('should return 404 if challenge not found', async () => {
      mockReq.params.id = '999';
      readingChallengeService.getChallengeById.mockRejectedValue(new Error('Challenge not found'));

      await readingChallengeController.getChallenge(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Challenge not found' });
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      readingChallengeService.getChallengeById.mockRejectedValue(error);

      await readingChallengeController.getChallenge(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getUserChallenges', () => {
    it('should return all challenges for the current user', async () => {
      const mockChallenges = [
        {
          id: 1,
          userId: 1,
          title: 'Summer Reading Challenge',
        },
        {
          id: 2,
          userId: 1,
          title: 'Winter Reading Challenge',
        },
      ];

      readingChallengeService.getUserChallenges.mockResolvedValue(mockChallenges);

      await readingChallengeController.getUserChallenges(mockReq, mockRes, mockNext);

      expect(readingChallengeService.getUserChallenges).toHaveBeenCalledWith(1);
      expect(mockRes.json).toHaveBeenCalledWith(mockChallenges);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      readingChallengeService.getUserChallenges.mockRejectedValue(error);

      await readingChallengeController.getUserChallenges(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('updateChallenge', () => {
    const mockUpdateData = {
      title: 'Updated Challenge',
      description: 'Updated challenge description',
    };

    it('should update a challenge', async () => {
      mockReq.params.id = '1';
      mockReq.body = mockUpdateData;
      const mockUpdatedChallenge = {
        id: 1,
        userId: 1,
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      readingChallengeService.updateChallenge.mockResolvedValue(mockUpdatedChallenge);

      await readingChallengeController.updateChallenge(mockReq, mockRes, mockNext);

      expect(readingChallengeService.updateChallenge).toHaveBeenCalledWith(1, mockUpdateData);
      expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedChallenge);
    });

    it('should return 404 if challenge not found', async () => {
      mockReq.params.id = '999';
      mockReq.body = mockUpdateData;
      readingChallengeService.updateChallenge.mockRejectedValue(new Error('Challenge not found'));

      await readingChallengeController.updateChallenge(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Challenge not found' });
    });

    it('should handle errors', async () => {
      mockReq.params.id = '1';
      mockReq.body = mockUpdateData;
      const error = new Error('Database error');
      readingChallengeService.updateChallenge.mockRejectedValue(error);

      await readingChallengeController.updateChallenge(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
}); 