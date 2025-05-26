class TropeService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async createTrope(data) {
    return this.prisma.trope.create({ data });
  }

  async getAllTropes() {
    return this.prisma.trope.findMany({
      include: {
        _count: { select: { reviews: true } }
      }
    });
  }

  async getTrope(id) {
    const trope = await this.prisma.trope.findUnique({
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
    if (!trope) throw new Error('Trope not found');
    return trope;
  }

  async updateTrope(id, data) {
    return this.prisma.trope.update({
      where: { id: parseInt(id) },
      data
    });
  }

  async deleteTrope(id) {
    return this.prisma.trope.delete({
      where: { id: parseInt(id) }
    });
  }
}

module.exports = TropeService; 