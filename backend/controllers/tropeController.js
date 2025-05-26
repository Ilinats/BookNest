const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new trope
const createTrope = async (req, res) => {
  try {
    const { name } = req.body;
    const trope = await prisma.trope.create({
      data: { name }
    });
    res.status(201).json(trope);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all tropes
const getAllTropes = async (req, res) => {
  try {
    const tropes = await prisma.trope.findMany({
      include: {
        _count: {
          select: { reviews: true }
        }
      }
    });
    res.json(tropes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific trope
const getTrope = async (req, res) => {
  try {
    const { id } = req.params;
    const trope = await prisma.trope.findUnique({
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
    if (!trope) {
      return res.status(404).json({ error: 'Trope not found' });
    }
    res.json(trope);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a trope
const updateTrope = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const trope = await prisma.trope.update({
      where: { id: parseInt(id) },
      data: { name }
    });
    res.json(trope);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a trope
const deleteTrope = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.trope.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createTrope,
  getAllTropes,
  getTrope,
  updateTrope,
  deleteTrope
}; 