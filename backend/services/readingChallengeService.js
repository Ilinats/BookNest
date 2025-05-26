class ReadingChallengeService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async createChallenge(data) {
    return this.prisma.readingChallenge.create({ data });
  }

  async getUserChallenges(userId) {
    return this.prisma.readingChallenge.findMany({
      where: { userId: parseInt(userId) },
      include: {
        entries: { include: { book: true } }
      }
    });
  }

  async getChallenge(id) {
    const challenge = await this.prisma.readingChallenge.findUnique({
      where: { id: parseInt(id) },
      include: {
        entries: { include: { book: true } }
      }
    });
    if (!challenge) throw new Error('Challenge not found');
    return challenge;
  }

  async updateChallenge(id, data) {
    return this.prisma.readingChallenge.update({
      where: { id: parseInt(id) },
      data
    });
  }

  async deleteChallenge(id) {
    return this.prisma.readingChallenge.delete({
      where: { id: parseInt(id) }
    });
  }
}

module.exports = ReadingChallengeService; 