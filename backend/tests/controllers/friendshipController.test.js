const friendshipController = require('../../controllers/friendshipController');
const friendshipService = require('../../services/friendshipService');

// Mock the friendship service
jest.mock('../../services/friendshipService', () => ({
  sendFriendRequest: jest.fn(),
  acceptFriendRequest: jest.fn(),
  rejectFriendRequest: jest.fn(),
  removeFriend: jest.fn(),
  getFriends: jest.fn(),
  getPendingRequests: jest.fn()
}));

describe('Friendship Controller', () => {
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

  describe('sendFriendRequest', () => {
    it('should send a friend request', async () => {
      const mockFriendId = 2;
      mockReq.body = { friendId: mockFriendId };
      const mockFriendship = {
        id: 1,
        userId: 1,
        friendId: mockFriendId,
        status: 'PENDING',
        createdAt: new Date(),
      };

      friendshipService.sendFriendRequest.mockResolvedValue(mockFriendship);

      await friendshipController.sendFriendRequest(mockReq, mockRes, mockNext);

      expect(friendshipService.sendFriendRequest).toHaveBeenCalledWith(1, mockFriendId);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(mockFriendship);
    });

    it('should handle errors', async () => {
      mockReq.body = { friendId: 2 };
      const error = new Error('Database error');
      friendshipService.sendFriendRequest.mockRejectedValue(error);

      await friendshipController.sendFriendRequest(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('acceptFriendRequest', () => {
    it('should accept a friend request', async () => {
      const mockRequestId = 1;
      mockReq.params.requestId = mockRequestId.toString();
      const mockUpdatedFriendship = {
        id: mockRequestId,
        userId: 2,
        friendId: 1,
        status: 'ACCEPTED',
        updatedAt: new Date(),
      };

      friendshipService.acceptFriendRequest.mockResolvedValue(mockUpdatedFriendship);

      await friendshipController.acceptFriendRequest(mockReq, mockRes, mockNext);

      expect(friendshipService.acceptFriendRequest).toHaveBeenCalledWith(mockRequestId);
      expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedFriendship);
    });

    it('should handle errors', async () => {
      mockReq.params.requestId = '1';
      const error = new Error('Database error');
      friendshipService.acceptFriendRequest.mockRejectedValue(error);

      await friendshipController.acceptFriendRequest(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('rejectFriendRequest', () => {
    it('should reject a friend request', async () => {
      const mockRequestId = 1;
      mockReq.params.requestId = mockRequestId.toString();
      const mockDeletedFriendship = {
        id: mockRequestId,
        userId: 2,
        friendId: 1,
        status: 'REJECTED',
      };

      friendshipService.rejectFriendRequest.mockResolvedValue(mockDeletedFriendship);

      await friendshipController.rejectFriendRequest(mockReq, mockRes, mockNext);

      expect(friendshipService.rejectFriendRequest).toHaveBeenCalledWith(mockRequestId);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Friend request rejected successfully' });
    });

    it('should handle errors', async () => {
      mockReq.params.requestId = '1';
      const error = new Error('Database error');
      friendshipService.rejectFriendRequest.mockRejectedValue(error);

      await friendshipController.rejectFriendRequest(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('removeFriend', () => {
    it('should remove a friend', async () => {
      const mockFriendshipId = 1;
      mockReq.params.friendshipId = mockFriendshipId.toString();
      const mockDeletedFriendship = {
        id: mockFriendshipId,
        userId: 1,
        friendId: 2,
        status: 'REMOVED',
      };

      friendshipService.removeFriend.mockResolvedValue(mockDeletedFriendship);

      await friendshipController.removeFriend(mockReq, mockRes, mockNext);

      expect(friendshipService.removeFriend).toHaveBeenCalledWith(mockFriendshipId);
      expect(mockRes.json).toHaveBeenCalledWith({ message: 'Friend removed successfully' });
    });

    it('should handle errors', async () => {
      mockReq.params.friendshipId = '1';
      const error = new Error('Database error');
      friendshipService.removeFriend.mockRejectedValue(error);

      await friendshipController.removeFriend(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getFriends', () => {
    it('should return all friends', async () => {
      const mockFriends = [
        {
          id: 1,
          userId: 1,
          friendId: 2,
          friend: {
            id: 2,
            username: 'friend1',
          },
        },
        {
          id: 2,
          userId: 1,
          friendId: 3,
          friend: {
            id: 3,
            username: 'friend2',
          },
        },
      ];

      friendshipService.getFriends.mockResolvedValue(mockFriends);

      await friendshipController.getFriends(mockReq, mockRes, mockNext);

      expect(friendshipService.getFriends).toHaveBeenCalledWith(1);
      expect(mockRes.json).toHaveBeenCalledWith(mockFriends);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      friendshipService.getFriends.mockRejectedValue(error);

      await friendshipController.getFriends(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });

  describe('getPendingRequests', () => {
    it('should return all pending friend requests', async () => {
      const mockRequests = [
        {
          id: 1,
          userId: 2,
          friendId: 1,
          user: {
            id: 2,
            username: 'user2',
          },
        },
        {
          id: 2,
          userId: 3,
          friendId: 1,
          user: {
            id: 3,
            username: 'user3',
          },
        },
      ];

      friendshipService.getPendingRequests.mockResolvedValue(mockRequests);

      await friendshipController.getPendingRequests(mockReq, mockRes, mockNext);

      expect(friendshipService.getPendingRequests).toHaveBeenCalledWith(1);
      expect(mockRes.json).toHaveBeenCalledWith(mockRequests);
    });

    it('should handle errors', async () => {
      const error = new Error('Database error');
      friendshipService.getPendingRequests.mockRejectedValue(error);

      await friendshipController.getPendingRequests(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
}); 