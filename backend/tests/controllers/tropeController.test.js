const tropeController = require('../../controllers/tropeController');
const tropeService = require('../../services/tropeService');

// Mock the trope service
jest.mock('../../services/tropeService');

describe('Trope Controller', () => {
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

  describe('getAllTropes', () => {
    it('should return all tropes', async () => {
      const mockTropes = [
        { id: 1, name: 'Enemies to Lovers' },
        { id: 2, name: 'Found Family' },
      ];

      tropeService.getAllTropes.mockResolvedValue(mockTropes);

      await tropeController.getAllTropes(mockReq, mockRes, mockNext);

      expect(tropeService.getAllTropes).toHaveBeenCalled();
      expect(mockRes.json).toHaveBeenCalledWith(mockTropes);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      tropeService.getAllTropes.mockRejectedValue(error);

      await tropeController.getAllTropes(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getTropeById', () => {
    it('should return a trope by id', async () => {
      const mockTrope = {
        id: 1,
        name: 'Enemies to Lovers',
        description: 'A trope where characters start as enemies and end up as lovers',
      };

      mockReq.params.id = '1';
      tropeService.getTropeById.mockResolvedValue(mockTrope);

      await tropeController.getTropeById(mockReq, mockRes, mockNext);

      expect(tropeService.getTropeById).toHaveBeenCalledWith(1);
      expect(mockRes.json).toHaveBeenCalledWith(mockTrope);
    });

    it('should return 404 if trope not found', async () => {
      mockReq.params.id = '999';
      tropeService.getTropeById.mockResolvedValue(null);

      await tropeController.getTropeById(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Trope not found' });
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      tropeService.getTropeById.mockRejectedValue(error);

      await tropeController.getTropeById(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('createTrope', () => {
    const mockTropeData = {
      name: 'New Trope',
      description: 'A new trope description',
    };

    it('should create a new trope', async () => {
      mockReq.body = mockTropeData;
      const mockCreatedTrope = {
        id: 1,
        ...mockTropeData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      tropeService.createTrope.mockResolvedValue(mockCreatedTrope);

      await tropeController.createTrope(mockReq, mockRes, mockNext);

      expect(tropeService.createTrope).toHaveBeenCalledWith(mockTropeData);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(mockCreatedTrope);
    });

    it('should handle errors', async () => {
      mockReq.body = mockTropeData;
      const error = new Error('Database error');
      tropeService.createTrope.mockRejectedValue(error);

      await tropeController.createTrope(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('updateTrope', () => {
    const mockUpdateData = {
      name: 'Updated Trope',
      description: 'Updated description',
    };

    it('should update a trope', async () => {
      mockReq.params.id = '1';
      mockReq.body = mockUpdateData;
      const mockUpdatedTrope = {
        id: 1,
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      tropeService.updateTrope.mockResolvedValue(mockUpdatedTrope);

      await tropeController.updateTrope(mockReq, mockRes, mockNext);

      expect(tropeService.updateTrope).toHaveBeenCalledWith(1, mockUpdateData);
      expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedTrope);
    });

    it('should return 404 if trope not found', async () => {
      mockReq.params.id = '999';
      mockReq.body = mockUpdateData;
      tropeService.updateTrope.mockResolvedValue(null);

      await tropeController.updateTrope(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Trope not found' });
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      tropeService.updateTrope.mockRejectedValue(error);

      await tropeController.updateTrope(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
}); 