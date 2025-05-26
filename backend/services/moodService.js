class MoodService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async createMood(data) {
    return this.prisma.mood.create({ data });
  }

  async getAllMoods() {
    return this.prisma.mood.findMany({
      include: {
        _count: { select: { reviews: true } }
      }
    });
  }

  async getMood(id) {
    const mood = await this.prisma.mood.findUnique({
      where: { id: parseInt(id) },
      include: {
        reviews: {
          include: {
            user: { select: { id: true, username: true } },
            book: true
          }
        }
      }
    });
    if (!mood) throw new Error('Mood not found');
    return mood;
  }

  async updateMood(id, data) {
    return this.prisma.mood.update({
      where: { id: parseInt(id) },
      data
    });
  }

  async deleteMood(id) {
    return this.prisma.mood.delete({
      where: { id: parseInt(id) }
    });
  }
}

module.exports = MoodService; 