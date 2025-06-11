const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Add a book to a library
const addBookToLibrary = async (req, res) => {
  try {
    const { libraryId, bookId } = req.body;

    // Check if the book is already in the library
    const existingEntry = await prisma.libraryEntry.findFirst({
      where: {
        libraryId: parseInt(libraryId),
        bookId: parseInt(bookId)
      }
    });

    if (existingEntry) {
      return res.status(400).json({ error: 'Book is already in this library' });
    }

    const entry = await prisma.libraryEntry.create({
      data: {
        libraryId: parseInt(libraryId),
        bookId: parseInt(bookId)
      },
      include: {
        book: true
      }
    });
    res.status(201).json(entry);
  } catch (error) {
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'Book is already in this library' });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
};

// Get all entries in a library
const getLibraryEntries = async (req, res) => {
  try {
    const { libraryId } = req.params;
    const entries = await prisma.libraryEntry.findMany({
      where: { libraryId: parseInt(libraryId) },
      include: {
        book: true
      }
    });
    res.json(entries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific library entry
const getLibraryEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await prisma.libraryEntry.findUnique({
      where: { id: parseInt(id) },
      include: {
        book: true
      }
    });
    if (!entry) {
      return res.status(404).json({ error: 'Library entry not found' });
    }
    res.json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove a book from a library
const removeBookFromLibrary = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.libraryEntry.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addBookToLibrary,
  getLibraryEntries,
  getLibraryEntry,
  removeBookFromLibrary
}; 