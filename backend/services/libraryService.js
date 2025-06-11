class LibraryService {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async createMandatoryFolders(userId) {
    const mandatoryFolders = [
      { name: 'Want to Read', description: 'Books you plan to read' },
      { name: 'Currently Reading', description: 'Books you are currently reading' },
      { name: 'Read', description: 'Books you have finished reading' }
    ];

    const folders = await Promise.all(
      mandatoryFolders.map(folder =>
        this.prisma.library.create({
          data: {
            ...folder,
            userId: parseInt(userId),
            isMandatory: true
          }
        })
      )
    );

    return folders;
  }

  async createLibrary(data) {
    const library = await this.prisma.library.create({ data });
    return library;
  }

  async getUserLibraries(userId) {
    return this.prisma.library.findMany({
      where: { userId: parseInt(userId) },
      include: {
        entries: {
          include: { book: true }
        },
        _count: {
          select: { entries: true }
        }
      },
      orderBy: [
        { isMandatory: 'desc' },
        { name: 'asc' }
      ]
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
    const library = await this.prisma.library.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!library) throw new Error('Library not found');
    if (library.isMandatory) throw new Error('Cannot modify mandatory folders');
    
    return this.prisma.library.update({
      where: { id: parseInt(id) },
      data
    });
  }

  async deleteLibrary(id) {
    const library = await this.prisma.library.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!library) throw new Error('Library not found');
    if (library.isMandatory) throw new Error('Cannot delete mandatory folders');
    
    return this.prisma.library.delete({
      where: { id: parseInt(id) }
    });
  }

  async addBookToReadFolder(userId, bookId) {
    const readFolder = await this.prisma.library.findFirst({
      where: {
        userId: parseInt(userId),
        name: 'Read'
      }
    });

    if (!readFolder) throw new Error('Read folder not found');

    return this.prisma.libraryEntry.create({
      data: {
        libraryId: readFolder.id,
        bookId: parseInt(bookId)
      }
    });
  }
}

module.exports = LibraryService; 