const bookController = require('../../controllers/bookController');
const bookService = require('../../services/bookService');

// Mock the book service
jest.mock('../../services/bookService', () => ({
  getAllBooks: jest.fn(),
  getBookById: jest.fn(),
  createBook: jest.fn(),
  updateBook: jest.fn(),
  deleteBook: jest.fn(),
  getTopRatedBooks: jest.fn(),
  getBooksByAuthor: jest.fn()
}));

describe('Book Controller', () => {
  let mockReq;
  let mockRes;
  let mockNext;
  let mockPrisma;

  beforeEach(() => {
    mockPrisma = {};
    mockReq = {
      query: {},
      params: {},
      body: {},
      prisma: mockPrisma
    };
    mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();
    jest.clearAllMocks();
  });

  describe('getAllBooks', () => {
    it('should return books with pagination', async () => {
      const mockBooks = {
        books: [
          { id: 1, title: 'Book 1' },
          { id: 2, title: 'Book 2' },
        ],
        pagination: {
          page: 1,
          limit: 10,
          total: 2,
          pages: 1,
        },
      };

      bookService.getAllBooks.mockResolvedValue(mockBooks);

      await bookController.getAllBooks(mockReq, mockRes, mockNext);

      expect(bookService.getAllBooks).toHaveBeenCalledWith(mockPrisma, {
        search: undefined,
        minRating: undefined,
        maxRating: undefined,
        minPages: undefined,
        maxPages: undefined,
        language: undefined,
        page: 1,
        limit: 10
      });
      expect(mockRes.json).toHaveBeenCalledWith(mockBooks);
    });

    it('should handle search query and filters', async () => {
      const mockBooks = {
        books: [{ id: 1, title: 'Test Book' }],
        pagination: {
          page: 1,
          limit: 10,
          total: 1,
          pages: 1,
        },
      };

      mockReq.query = {
        search: 'test',
        minRating: '4',
        maxRating: '5',
        minPages: '100',
        maxPages: '500',
        language: 'en',
        page: '2',
        limit: '20'
      };
      
      bookService.getAllBooks.mockResolvedValue(mockBooks);

      await bookController.getAllBooks(mockReq, mockRes, mockNext);

      expect(bookService.getAllBooks).toHaveBeenCalledWith(mockPrisma, {
        search: 'test',
        minRating: 4,
        maxRating: 5,
        minPages: 100,
        maxPages: 500,
        language: 'en',
        page: 2,
        limit: 20
      });
      expect(mockRes.json).toHaveBeenCalledWith(mockBooks);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      bookService.getAllBooks.mockRejectedValue(error);

      await bookController.getAllBooks(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getBookById', () => {
    it('should return a book by id', async () => {
      const mockBookId = 1;
      const mockBook = {
        id: mockBookId,
        title: 'Test Book',
        author: 'Test Author',
      };

      mockReq.params.id = mockBookId.toString();
      bookService.getBookById.mockResolvedValue(mockBook);

      await bookController.getBookById(mockReq, mockRes, mockNext);

      expect(bookService.getBookById).toHaveBeenCalledWith(mockPrisma, mockBookId);
      expect(mockRes.json).toHaveBeenCalledWith(mockBook);
    });

    it('should return 400 for invalid book id', async () => {
      mockReq.params.id = 'invalid';
      
      await bookController.getBookById(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Invalid book ID' });
    });

    it('should return 404 if book not found', async () => {
      mockReq.params.id = '999';
      bookService.getBookById.mockResolvedValue(null);

      await bookController.getBookById(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Book not found' });
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      bookService.getBookById.mockRejectedValue(error);

      await bookController.getBookById(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('createBook', () => {
    const mockBookData = {
      title: 'New Book',
      author: 'New Author',
      description: 'Book description',
      coverUrl: 'https://example.com/cover.jpg',
    };

    it('should create a new book', async () => {
      mockReq.body = mockBookData;
      const mockCreatedBook = {
        id: 1,
        ...mockBookData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      bookService.createBook.mockResolvedValue(mockCreatedBook);

      await bookController.createBook(mockReq, mockRes, mockNext);

      expect(bookService.createBook).toHaveBeenCalledWith(mockPrisma, mockBookData);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(mockCreatedBook);
    });

    it('should handle duplicate book error', async () => {
      mockReq.body = mockBookData;
      const error = { code: 'P2002' };
      bookService.createBook.mockRejectedValue(error);

      await bookController.createBook(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'A book with this information already exists' });
    });

    it('should handle other errors', async () => {
      mockReq.body = mockBookData;
      const error = new Error('Database error');
      bookService.createBook.mockRejectedValue(error);

      await bookController.createBook(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('updateBook', () => {
    const mockBookId = 1;
    const mockUpdateData = {
      title: 'Updated Book',
      description: 'Updated description',
    };

    it('should update a book', async () => {
      mockReq.params.id = mockBookId.toString();
      mockReq.body = mockUpdateData;
      const mockUpdatedBook = {
        id: mockBookId,
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      bookService.updateBook.mockResolvedValue(mockUpdatedBook);

      await bookController.updateBook(mockReq, mockRes, mockNext);

      expect(bookService.updateBook).toHaveBeenCalledWith(mockPrisma, mockBookId, mockUpdateData);
      expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedBook);
    });

    it('should return 404 if book not found', async () => {
      mockReq.params.id = mockBookId.toString();
      mockReq.body = mockUpdateData;
      bookService.updateBook.mockResolvedValue(null);

      await bookController.updateBook(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Book not found' });
    });

    it('should handle errors', async () => {
      mockReq.params.id = mockBookId.toString();
      mockReq.body = mockUpdateData;
      const error = new Error('Database error');
      bookService.updateBook.mockRejectedValue(error);

      await bookController.updateBook(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('deleteBook', () => {
    const mockBookId = 1;

    it('should delete a book', async () => {
      mockReq.params.id = mockBookId.toString();
      bookService.deleteBook.mockResolvedValue({ success: true });

      await bookController.deleteBook(mockReq, mockRes, mockNext);

      expect(bookService.deleteBook).toHaveBeenCalledWith(mockPrisma, mockBookId);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Book deleted successfully' });
    });

    it('should handle deletion failure', async () => {
      mockReq.params.id = mockBookId.toString();
      bookService.deleteBook.mockResolvedValue({ 
        success: false, 
        statusCode: 404, 
        message: 'Book not found' 
      });

      await bookController.deleteBook(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Book not found' });
    });

    it('should handle errors', async () => {
      mockReq.params.id = mockBookId.toString();
      const error = new Error('Database error');
      bookService.deleteBook.mockRejectedValue(error);

      await bookController.deleteBook(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getTopRatedBooks', () => {
    it('should return top rated books', async () => {
      const mockBooks = [
        { id: 1, title: 'Top Book 1', averageRating: 4.5 },
        { id: 2, title: 'Top Book 2', averageRating: 4.3 },
      ];

      mockReq.query.limit = '5';
      bookService.getTopRatedBooks.mockResolvedValue(mockBooks);

      await bookController.getTopRatedBooks(mockReq, mockRes, mockNext);

      expect(bookService.getTopRatedBooks).toHaveBeenCalledWith(mockPrisma, 5);
      expect(mockRes.json).toHaveBeenCalledWith(mockBooks);
    });

    it('should use default limit if not specified', async () => {
      const mockBooks = [
        { id: 1, title: 'Top Book 1', averageRating: 4.5 },
      ];

      bookService.getTopRatedBooks.mockResolvedValue(mockBooks);

      await bookController.getTopRatedBooks(mockReq, mockRes, mockNext);

      expect(bookService.getTopRatedBooks).toHaveBeenCalledWith(mockPrisma, 10);
      expect(mockRes.json).toHaveBeenCalledWith(mockBooks);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      bookService.getTopRatedBooks.mockRejectedValue(error);

      await bookController.getTopRatedBooks(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
}); 