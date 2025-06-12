class FriendshipService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async sendFriendRequest(data) {
    // Check if friendship already exists
    const existingFriendship = await this.prisma.friendship.findFirst({
      where: {
        OR: [
          {
            userId: data.userId,
            friendId: data.friendId
          },
          {
            userId: data.friendId,
            friendId: data.userId
          }
        ]
      }
    });

    if (existingFriendship) {
      throw new Error('Friendship already exists');
    }

    return this.prisma.friendship.create({
      data,
      include: {
        friend: { select: { id: true, username: true, email: true } }
      }
    });
  }

  async getUserFriends(userId) {
    const friendships = await this.prisma.friendship.findMany({
      where: {
        OR: [
          { userId: parseInt(userId) },
          { friendId: parseInt(userId) }
        ]
      },
      include: {
        user: { select: { id: true, username: true, email: true } },
        friend: { select: { id: true, username: true, email: true } }
      }
    });
    return friendships.map(friendship => {
      const friend = friendship.userId === parseInt(userId)
        ? friendship.friend
        : friendship.user;
      return {
        ...friend,
        friendshipId: friendship.id,
        createdAt: friendship.createdAt
      };
    });
  }

  async getFriendship(id) {
    const friendship = await this.prisma.friendship.findUnique({
      where: { id: parseInt(id) },
      include: {
        user: { select: { id: true, username: true, email: true } },
        friend: { select: { id: true, username: true, email: true } }
      }
    });
    if (!friendship) throw new Error('Friendship not found');
    return friendship;
  }

  async removeFriendship(id) {
    return this.prisma.friendship.delete({
      where: { id: parseInt(id) }
    });
  }
}

module.exports = FriendshipService; 