class ChallengeEntryService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async addBookToChallenge(data) {
    return this.prisma.challengeEntry.create({
      data,
      include: { book: true }
    });
  }

  async getChallengeEntries(challengeId) {
    return this.prisma.challengeEntry.findMany({
      where: { challengeId: parseInt(challengeId) },
      include: { book: true }
    });
  }

  async getChallengeEntry(id) {
    const entry = await this.prisma.challengeEntry.findUnique({
      where: { id: parseInt(id) },
      include: { book: true }
    });
    if (!entry) throw new Error('Challenge entry not found');
    return entry;
  }

  async removeBookFromChallenge(id) {
    return this.prisma.challengeEntry.delete({
      where: { id: parseInt(id) }
    });
  }
}

module.exports = ChallengeEntryService; 