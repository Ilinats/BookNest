const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new library
const createLibrary = async (req, res) => {
  try {
    const { name, type, userId } = req.body;
    const library = await prisma.library.create({
      data: {
        name,
        type,
        userId
      }
    });
    res.status(201).json(library);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all libraries for a user
const getUserLibraries = async (req, res) => {
  try {
    const { userId } = req.params;
    const libraries = await prisma.library.findMany({
      where: { userId: parseInt(userId) },
      include: {
        entries: {
          include: {
            book: true
          }
        }
      }
    });
    res.json(libraries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific library
const getLibrary = async (req, res) => {
  try {
    const { id } = req.params;
    const library = await prisma.library.findUnique({
      where: { id: parseInt(id) },
      include: {
        entries: {
          include: {
            book: true
          }
        }
      }
    });
    if (!library) {
      return res.status(404).json({ error: 'Library not found' });
    }
    res.json(library);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a library
const updateLibrary = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type } = req.body;
    const library = await prisma.library.update({
      where: { id: parseInt(id) },
      data: {
        name,
        type
      }
    });
    res.json(library);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a library
const deleteLibrary = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.library.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createLibrary,
  getUserLibraries,
  getLibrary,
  updateLibrary,
  deleteLibrary
}; 