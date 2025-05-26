const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new genre
const createGenre = async (req, res) => {
  try {
    const { name } = req.body;
    const genre = await prisma.genre.create({
      data: { name }
    });
    res.status(201).json(genre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all genres
const getAllGenres = async (req, res) => {
  try {
    const genres = await prisma.genre.findMany({
      include: {
        _count: {
          select: { reviews: true }
        }
      }
    });
    res.json(genres);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific genre
const getGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await prisma.genre.findUnique({
      where: { id: parseInt(id) },
      include: {
        reviews: {
          include: {
            user: {
              select: {
                id: true,
                username: true
              }
            },
            book: true
          }
        }
      }
    });
    if (!genre) {
      return res.status(404).json({ error: 'Genre not found' });
    }
    res.json(genre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a genre
const updateGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const genre = await prisma.genre.update({
      where: { id: parseInt(id) },
      data: { name }
    });
    res.json(genre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a genre
const deleteGenre = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.genre.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createGenre,
  getAllGenres,
  getGenre,
  updateGenre,
  deleteGenre
}; 