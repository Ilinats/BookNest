const moodController = require('../../controllers/moodController');
const moodService = require('../../services/moodService');

// Mock the mood service
jest.mock('../../services/moodService', () => ({
  getAllMoods: jest.fn(),
  getMood: jest.fn(),
  createMood: jest.fn(),
  updateMood: jest.fn(),
  deleteMood: jest.fn()
}));

describe('Mood Controller', () => {
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

  describe('getAllMoods', () => {
    it('should return all moods', async () => {
      const mockMoods = [
        { id: 1, name: 'Happy' },
        { id: 2, name: 'Sad' },
      ];

      moodService.getAllMoods.mockResolvedValue(mockMoods);

      await moodController.getAllMoods(mockReq, mockRes, mockNext);

      expect(moodService.getAllMoods).toHaveBeenCalled();
      expect(mockRes.json).toHaveBeenCalledWith(mockMoods);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      moodService.getAllMoods.mockRejectedValue(error);

      await moodController.getAllMoods(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getMoodById', () => {
    it('should return a mood by id', async () => {
      const mockMood = {
        id: 1,
        name: 'Happy',
        description: 'A feeling of joy and contentment',
      };

      mockReq.params.id = '1';
      moodService.getMood.mockResolvedValue(mockMood);

      await moodController.getMoodById(mockReq, mockRes, mockNext);

      expect(moodService.getMood).toHaveBeenCalledWith(1);
      expect(mockRes.json).toHaveBeenCalledWith(mockMood);
    });

    it('should return 404 if mood not found', async () => {
      mockReq.params.id = '999';
      moodService.getMood.mockRejectedValue(new Error('Mood not found'));

      await moodController.getMoodById(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Mood not found' });
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      moodService.getMood.mockRejectedValue(error);

      await moodController.getMoodById(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('createMood', () => {
    const mockMoodData = {
      name: 'New Mood',
      description: 'A new mood description',
    };

    it('should create a new mood', async () => {
      mockReq.body = mockMoodData;
      const mockCreatedMood = {
        id: 1,
        ...mockMoodData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      moodService.createMood.mockResolvedValue(mockCreatedMood);

      await moodController.createMood(mockReq, mockRes, mockNext);

      expect(moodService.createMood).toHaveBeenCalledWith(mockMoodData);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(mockCreatedMood);
    });

    it('should handle errors', async () => {
      mockReq.body = mockMoodData;
      const error = new Error('Database error');
      moodService.createMood.mockRejectedValue(error);

      await moodController.createMood(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('updateMood', () => {
    const mockUpdateData = {
      name: 'Updated Mood',
      description: 'Updated mood description',
    };

    it('should update a mood', async () => {
      mockReq.params.id = '1';
      mockReq.body = mockUpdateData;
      const mockUpdatedMood = {
        id: 1,
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      moodService.updateMood.mockResolvedValue(mockUpdatedMood);

      await moodController.updateMood(mockReq, mockRes, mockNext);

      expect(moodService.updateMood).toHaveBeenCalledWith(1, mockUpdateData);
      expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedMood);
    });

    it('should return 404 if mood not found', async () => {
      mockReq.params.id = '999';
      mockReq.body = mockUpdateData;
      moodService.updateMood.mockRejectedValue(new Error('Mood not found'));

      await moodController.updateMood(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Mood not found' });
    });

    it('should handle errors', async () => {
      mockReq.params.id = '1';
      mockReq.body = mockUpdateData;
      const error = new Error('Database error');
      moodService.updateMood.mockRejectedValue(error);

      await moodController.updateMood(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
}); 