const userController = require('../../controllers/userController');
const userService = require('../../services/userService');

// Mock the user service
jest.mock('../../services/userService', () => ({
  getUserById: jest.fn(),
  getAllUsers: jest.fn(),
  updateUser: jest.fn(),
  deleteUser: jest.fn(),
  createUser: jest.fn()
}));

describe('User Controller', () => {
  let mockReq;
  let mockRes;
  let mockNext;
  let mockPrisma;

  beforeEach(() => {
    mockPrisma = {};
    mockReq = {
      user: { id: 1 },
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

  describe('getCurrentUser', () => {
    it('should return the current user', async () => {
      const mockUser = {
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
      };

      userService.getUserById.mockResolvedValue(mockUser);

      await userController.getCurrentUser(mockReq, mockRes, mockNext);

      expect(userService.getUserById).toHaveBeenCalledWith(mockPrisma, 1);
      expect(mockRes.json).toHaveBeenCalledWith(mockUser);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      userService.getUserById.mockRejectedValue(error);

      await userController.getCurrentUser(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getUserById', () => {
    it('should return a user by id', async () => {
      const mockUser = {
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
      };

      mockReq.params.id = '1';
      userService.getUserById.mockResolvedValue(mockUser);

      await userController.getUserById(mockReq, mockRes, mockNext);

      expect(userService.getUserById).toHaveBeenCalledWith(mockPrisma, 1);
      expect(mockRes.json).toHaveBeenCalledWith(mockUser);
    });

    it('should return 400 for invalid user id', async () => {
      mockReq.params.id = 'invalid';
      
      await userController.getUserById(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Invalid user ID' });
    });

    it('should return 404 if user not found', async () => {
      mockReq.params.id = '999';
      userService.getUserById.mockResolvedValue(null);

      await userController.getUserById(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'User not found' });
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      userService.getUserById.mockRejectedValue(error);

      await userController.getUserById(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getAllUsers', () => {
    it('should return all users with pagination', async () => {
      const mockUsers = {
        users: [
          { id: 1, username: 'user1' },
          { id: 2, username: 'user2' },
        ],
        pagination: {
          page: 1,
          limit: 10,
          total: 2,
          pages: 1
        }
      };

      mockReq.query = {
        page: '1',
        limit: '10',
        search: 'test'
      };

      userService.getAllUsers.mockResolvedValue(mockUsers);

      await userController.getAllUsers(mockReq, mockRes, mockNext);

      expect(userService.getAllUsers).toHaveBeenCalledWith(mockPrisma, {
        page: 1,
        limit: 10,
        search: 'test'
      });
      expect(mockRes.json).toHaveBeenCalledWith(mockUsers);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      userService.getAllUsers.mockRejectedValue(error);

      await userController.getAllUsers(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('updateUser', () => {
    const mockUpdateData = {
      username: 'updateduser',
      email: 'updated@example.com',
    };

    it('should update a user', async () => {
      mockReq.params.id = '1';
      mockReq.body = mockUpdateData;
      const mockUpdatedUser = {
        id: 1,
        ...mockUpdateData,
      };

      userService.updateUser.mockResolvedValue(mockUpdatedUser);

      await userController.updateUser(mockReq, mockRes, mockNext);

      expect(userService.updateUser).toHaveBeenCalledWith(mockPrisma, 1, mockUpdateData);
      expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedUser);
    });

    it('should return 400 for invalid user id', async () => {
      mockReq.params.id = 'invalid';
      mockReq.body = mockUpdateData;

      await userController.updateUser(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Invalid user ID' });
    });

    it('should return 404 if user not found', async () => {
      mockReq.params.id = '999';
      mockReq.body = mockUpdateData;
      userService.updateUser.mockResolvedValue(null);

      await userController.updateUser(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'User not found' });
    });

    it('should handle duplicate email error', async () => {
      mockReq.params.id = '1';
      mockReq.body = mockUpdateData;
      const error = { code: 'P2002' };
      userService.updateUser.mockRejectedValue(error);

      await userController.updateUser(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Email already in use' });
    });

    it('should handle other errors', async () => {
      const error = new Error('Database error');
      userService.updateUser.mockRejectedValue(error);

      await userController.updateUser(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('updateCurrentUser', () => {
    const mockUpdateData = {
      username: 'updateduser',
      email: 'updated@example.com',
    };

    it('should update the current user', async () => {
      mockReq.body = mockUpdateData;
      const mockUpdatedUser = {
        id: 1,
        ...mockUpdateData,
      };

      userService.updateUser.mockResolvedValue(mockUpdatedUser);

      await userController.updateCurrentUser(mockReq, mockRes, mockNext);

      expect(userService.updateUser).toHaveBeenCalledWith(mockPrisma, 1, mockUpdateData);
      expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedUser);
    });

    it('should handle duplicate email error', async () => {
      mockReq.body = mockUpdateData;
      const error = { code: 'P2002' };
      userService.updateUser.mockRejectedValue(error);

      await userController.updateCurrentUser(mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Email already in use' });
    });

    it('should handle other errors', async () => {
      const error = new Error('Database error');
      userService.updateUser.mockRejectedValue(error);

      await userController.updateCurrentUser(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
}); 