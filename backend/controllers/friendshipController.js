const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const sendFriendRequest = async (req, res) => {
  try {
    const { userId, friendId } = req.body;
    const friendship = await prisma.friendship.create({
      data: {
        userId: parseInt(userId),
        friendId: parseInt(friendId)
      },
      include: {
        friend: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    });
    res.status(201).json(friendship);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserFriends = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log('Getting friends for user:', userId);
    
    const friendships = await prisma.friendship.findMany({
      where: {
        OR: [
          { userId: parseInt(userId) },
          { friendId: parseInt(userId) }
        ]
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        },
        friend: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    });

    console.log('Found friendships:', friendships);

    // Transform the response to show friends regardless of who initiated
    const friends = friendships.map(friendship => {
      const friend = friendship.userId === parseInt(userId) 
        ? friendship.friend 
        : friendship.user;
      return {
        ...friend,
        friendshipId: friendship.id,
        createdAt: friendship.createdAt
      };
    });

    console.log('Transformed friends:', friends);

    res.json({
      success: true,
      data: friends
    });
  } catch (error) {
    console.error('Error getting user friends:', error);
    res.status(400).json({ 
      success: false,
      error: error.message 
    });
  }
};

// Get a specific friendship
const getFriendship = async (req, res) => {
  try {
    const { id } = req.params;
    const friendship = await prisma.friendship.findUnique({
      where: { id: parseInt(id) },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true
          }
        },
        friend: {
          select: {
            id: true,
            username: true,
            email: true
          }
        }
      }
    });
    if (!friendship) {
      return res.status(404).json({ error: 'Friendship not found' });
    }
    res.json(friendship);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove a friendship
const removeFriendship = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.friendship.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  sendFriendRequest,
  getUserFriends,
  getFriendship,
  removeFriendship
}; 