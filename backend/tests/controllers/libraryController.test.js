const libraryController = require('../../controllers/libraryController');
const libraryService = require('../../services/libraryService');

// Mock the library service
jest.mock('../../services/libraryService', () => ({
  createLibrary: jest.fn(),
  getLibraryById: jest.fn(),
  getUserLibraries: jest.fn(),
  updateLibrary: jest.fn(),
  deleteLibrary: jest.fn()
}));

describe('Library Controller', () => {
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

  describe('createLibrary', () => {
    const mockLibraryData = {
      name: 'My Library',
      description: 'My personal book collection',
      isPublic: true,
    };

    it('should create a new library', async () => {
      mockReq.body = mockLibraryData;
      const mockCreatedLibrary = {
        id: 1,
        userId: 1,
        ...mockLibraryData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      libraryService.createLibrary.mockResolvedValue(mockCreatedLibrary);

      await libraryController.createLibrary(mockReq, mockRes, mockNext);

      expect(libraryService.createLibrary).toHaveBeenCalledWith({
        userId: 1,
        ...mockLibraryData,
      });
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(mockCreatedLibrary);
    });

    it('should handle errors', async () => {
      mockReq.body = mockLibraryData;
      const error = new Error('Database error');
      libraryService.createLibrary.mockRejectedValue(error);

      await libraryController.createLibrary(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getLibrary', () => {
    it('should return a library by id', async () => {
      const mockLibrary = {
        id: 1,
        name: 'My Library',
        userId: 1,
        description: 'My personal book collection',
        isPublic: true,
      };

      mockReq.params.id = '1';
      libraryService.getLibraryById.mockResolvedValue(mockLibrary);

      await libraryController.getLibrary(mockReq, mockRes, mockNext);

      expect(libraryService.getLibraryById).toHaveBeenCalledWith(1);
      expect(mockRes.json).toHaveBeenCalledWith(mockLibrary);
    });

    it('should return 404 if library not found', async () => {
      mockReq.params.id = '999';
      libraryService.getLibraryById.mockRejectedValue(new Error('Library not found'));

      await libraryController.getLibrary(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Library not found' });
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      libraryService.getLibraryById.mockRejectedValue(error);

      await libraryController.getLibrary(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getUserLibraries', () => {
    it('should return all libraries for the current user', async () => {
      const mockLibraries = [
        {
          id: 1,
          name: 'My Library 1',
          userId: 1,
        },
        {
          id: 2,
          name: 'My Library 2',
          userId: 1,
        },
      ];

      libraryService.getUserLibraries.mockResolvedValue(mockLibraries);

      await libraryController.getUserLibraries(mockReq, mockRes, mockNext);

      expect(libraryService.getUserLibraries).toHaveBeenCalledWith(1);
      expect(mockRes.json).toHaveBeenCalledWith(mockLibraries);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      libraryService.getUserLibraries.mockRejectedValue(error);

      await libraryController.getUserLibraries(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('updateLibrary', () => {
    const mockUpdateData = {
      name: 'Updated Library',
      description: 'Updated library description',
    };

    it('should update a library', async () => {
      mockReq.params.id = '1';
      mockReq.body = mockUpdateData;
      const mockUpdatedLibrary = {
        id: 1,
        userId: 1,
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      libraryService.updateLibrary.mockResolvedValue(mockUpdatedLibrary);

      await libraryController.updateLibrary(mockReq, mockRes, mockNext);

      expect(libraryService.updateLibrary).toHaveBeenCalledWith(1, mockUpdateData);
      expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedLibrary);
    });

    it('should return 404 if library not found', async () => {
      mockReq.params.id = '999';
      mockReq.body = mockUpdateData;
      libraryService.updateLibrary.mockRejectedValue(new Error('Library not found'));

      await libraryController.updateLibrary(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Library not found' });
    });

    it('should handle errors', async () => {
      mockReq.params.id = '1';
      mockReq.body = mockUpdateData;
      const error = new Error('Database error');
      libraryService.updateLibrary.mockRejectedValue(error);

      await libraryController.updateLibrary(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
}); 