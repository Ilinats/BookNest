class LibraryEntryService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async addBookToLibrary(data) {
    return this.prisma.libraryEntry.create({
      data,
      include: { book: true }
    });
  }

  async getLibraryEntries(libraryId) {
    return this.prisma.libraryEntry.findMany({
      where: { libraryId: parseInt(libraryId) },
      include: { book: true }
    });
  }

  async getLibraryEntry(id) {
    const entry = await this.prisma.libraryEntry.findUnique({
      where: { id: parseInt(id) },
      include: { book: true }
    });
    if (!entry) throw new Error('Library entry not found');
    return entry;
  }

  async removeBookFromLibrary(id) {
    return this.prisma.libraryEntry.delete({
      where: { id: parseInt(id) }
    });
  }
}

module.exports = LibraryEntryService; 