const genreController = require('../../controllers/genreController');
const genreService = require('../../services/genreService');

// Mock the genre service
jest.mock('../../services/genreService', () => ({
  getAllGenres: jest.fn(),
  getGenre: jest.fn(),
  createGenre: jest.fn(),
  updateGenre: jest.fn(),
  deleteGenre: jest.fn()
}));

describe('Genre Controller', () => {
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

  describe('getAllGenres', () => {
    it('should return all genres', async () => {
      const mockGenres = [
        { id: 1, name: 'Fantasy' },
        { id: 2, name: 'Science Fiction' },
      ];

      genreService.getAllGenres.mockResolvedValue(mockGenres);

      await genreController.getAllGenres(mockReq, mockRes, mockNext);

      expect(genreService.getAllGenres).toHaveBeenCalled();
      expect(mockRes.json).toHaveBeenCalledWith(mockGenres);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      genreService.getAllGenres.mockRejectedValue(error);

      await genreController.getAllGenres(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getGenreById', () => {
    it('should return a genre by id', async () => {
      const mockGenre = {
        id: 1,
        name: 'Fantasy',
        description: 'Fantasy genre description',
      };

      mockReq.params.id = '1';
      genreService.getGenre.mockResolvedValue(mockGenre);

      await genreController.getGenreById(mockReq, mockRes, mockNext);

      expect(genreService.getGenre).toHaveBeenCalledWith(1);
      expect(mockRes.json).toHaveBeenCalledWith(mockGenre);
    });

    it('should return 404 if genre not found', async () => {
      mockReq.params.id = '999';
      genreService.getGenre.mockRejectedValue(new Error('Genre not found'));

      await genreController.getGenreById(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Genre not found' });
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      genreService.getGenre.mockRejectedValue(error);

      await genreController.getGenreById(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('createGenre', () => {
    const mockGenreData = {
      name: 'New Genre',
      description: 'A new genre description',
    };

    it('should create a new genre', async () => {
      mockReq.body = mockGenreData;
      const mockCreatedGenre = {
        id: 1,
        ...mockGenreData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      genreService.createGenre.mockResolvedValue(mockCreatedGenre);

      await genreController.createGenre(mockReq, mockRes, mockNext);

      expect(genreService.createGenre).toHaveBeenCalledWith(mockGenreData);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(mockCreatedGenre);
    });

    it('should handle errors', async () => {
      mockReq.body = mockGenreData;
      const error = new Error('Database error');
      genreService.createGenre.mockRejectedValue(error);

      await genreController.createGenre(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('updateGenre', () => {
    const mockUpdateData = {
      name: 'Updated Genre',
      description: 'Updated genre description',
    };

    it('should update a genre', async () => {
      mockReq.params.id = '1';
      mockReq.body = mockUpdateData;
      const mockUpdatedGenre = {
        id: 1,
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      genreService.updateGenre.mockResolvedValue(mockUpdatedGenre);

      await genreController.updateGenre(mockReq, mockRes, mockNext);

      expect(genreService.updateGenre).toHaveBeenCalledWith(1, mockUpdateData);
      expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedGenre);
    });

    it('should return 404 if genre not found', async () => {
      mockReq.params.id = '999';
      mockReq.body = mockUpdateData;
      genreService.updateGenre.mockRejectedValue(new Error('Genre not found'));

      await genreController.updateGenre(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Genre not found' });
    });

    it('should handle errors', async () => {
      mockReq.params.id = '1';
      mockReq.body = mockUpdateData;
      const error = new Error('Database error');
      genreService.updateGenre.mockRejectedValue(error);

      await genreController.updateGenre(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});