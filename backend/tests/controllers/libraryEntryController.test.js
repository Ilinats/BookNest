const libraryEntryController = require('../../controllers/libraryEntryController');
const libraryEntryService = require('../../services/libraryEntryService');

// Mock the library entry service
jest.mock('../../services/libraryEntryService', () => ({
  getLibraryEntries: jest.fn(),
  addBookToLibrary: jest.fn(),
  removeBookFromLibrary: jest.fn(),
  updateLibraryEntry: jest.fn()
}));

describe('Library Entry Controller', () => {
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

  describe('getLibraryEntries', () => {
    it('should return all entries for a library', async () => {
      const mockEntries = [
        {
          id: 1,
          libraryId: 1,
          bookId: 1,
          book: {
            id: 1,
            title: 'Book 1',
          },
        },
        {
          id: 2,
          libraryId: 1,
          bookId: 2,
          book: {
            id: 2,
            title: 'Book 2',
          },
        },
      ];

      mockReq.params.libraryId = '1';
      libraryEntryService.getLibraryEntries.mockResolvedValue(mockEntries);

      await libraryEntryController.getLibraryEntries(mockReq, mockRes, mockNext);

      expect(libraryEntryService.getLibraryEntries).toHaveBeenCalledWith(1);
      expect(mockRes.json).toHaveBeenCalledWith(mockEntries);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      libraryEntryService.getLibraryEntries.mockRejectedValue(error);

      await libraryEntryController.getLibraryEntries(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('addBookToLibrary', () => {
    const mockEntryData = {
      libraryId: 1,
      bookId: 1,
    };

    it('should add a book to a library', async () => {
      mockReq.body = mockEntryData;
      const mockEntry = {
        id: 1,
        ...mockEntryData,
        book: {
          id: 1,
          title: 'Book 1',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      libraryEntryService.addBookToLibrary.mockResolvedValue(mockEntry);

      await libraryEntryController.addBookToLibrary(mockReq, mockRes, mockNext);

      expect(libraryEntryService.addBookToLibrary).toHaveBeenCalledWith(mockEntryData);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(mockEntry);
    });

    it('should handle errors', async () => {
      mockReq.body = mockEntryData;
      const error = new Error('Database error');
      libraryEntryService.addBookToLibrary.mockRejectedValue(error);

      await libraryEntryController.addBookToLibrary(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('removeBookFromLibrary', () => {
    it('should remove a book from a library', async () => {
      mockReq.params.entryId = '1';
      const mockDeletedEntry = {
        id: 1,
        libraryId: 1,
        bookId: 1,
      };

      libraryEntryService.removeBookFromLibrary.mockResolvedValue(mockDeletedEntry);

      await libraryEntryController.removeBookFromLibrary(mockReq, mockRes, mockNext);

      expect(libraryEntryService.removeBookFromLibrary).toHaveBeenCalledWith(1);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Book removed from library successfully' });
    });

    it('should handle errors', async () => {
      mockReq.params.entryId = '1';
      const error = new Error('Database error');
      libraryEntryService.removeBookFromLibrary.mockRejectedValue(error);

      await libraryEntryController.removeBookFromLibrary(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('updateLibraryEntry', () => {
    const mockUpdateData = {
      status: 'READ',
      rating: 4,
      review: 'Great book!',
    };

    it('should update a library entry', async () => {
      mockReq.params.entryId = '1';
      mockReq.body = mockUpdateData;
      const mockUpdatedEntry = {
        id: 1,
        libraryId: 1,
        bookId: 1,
        ...mockUpdateData,
        updatedAt: new Date(),
      };

      libraryEntryService.updateLibraryEntry.mockResolvedValue(mockUpdatedEntry);

      await libraryEntryController.updateLibraryEntry(mockReq, mockRes, mockNext);

      expect(libraryEntryService.updateLibraryEntry).toHaveBeenCalledWith(1, mockUpdateData);
      expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedEntry);
    });

    it('should handle errors', async () => {
      mockReq.params.entryId = '1';
      mockReq.body = mockUpdateData;
      const error = new Error('Database error');
      libraryEntryService.updateLibraryEntry.mockRejectedValue(error);

      await libraryEntryController.updateLibraryEntry(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
}); 