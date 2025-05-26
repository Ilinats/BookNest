class GenreService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async createGenre(data) {
    return this.prisma.genre.create({ data });
  }

  async getAllGenres() {
    return this.prisma.genre.findMany({
      include: {
        _count: { select: { reviews: true } }
      }
    });
  }

  async getGenre(id) {
    const genre = await this.prisma.genre.findUnique({
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
    if (!genre) throw new Error('Genre not found');
    return genre;
  }

  async updateGenre(id, data) {
    return this.prisma.genre.update({
      where: { id: parseInt(id) },
      data
    });
  }

  async deleteGenre(id) {
    return this.prisma.genre.delete({
      where: { id: parseInt(id) }
    });
  }
}

module.exports = GenreService; 