class LibraryService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async createLibrary(data) {
    return this.prisma.library.create({ data });
  }

  async getUserLibraries(userId) {
    return this.prisma.library.findMany({
      where: { userId: parseInt(userId) },
      include: {
        entries: {
          include: { book: true }
        }
      }
    });
  }

  async getLibrary(id) {
    const library = await this.prisma.library.findUnique({
      where: { id: parseInt(id) },
      include: {
        entries: {
          include: { book: true }
        }
      }
    });
    if (!library) throw new Error('Library not found');
    return library;
  }

  async updateLibrary(id, data) {
    return this.prisma.library.update({
      where: { id: parseInt(id) },
      data
    });
  }

  async deleteLibrary(id) {
    return this.prisma.library.delete({
      where: { id: parseInt(id) }
    });
  }
}

module.exports = LibraryService; 