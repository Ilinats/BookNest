const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new mood
const createMood = async (req, res) => {
  try {
    const { name } = req.body;
    const mood = await prisma.mood.create({
      data: { name }
    });
    res.status(201).json(mood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all moods
const getAllMoods = async (req, res) => {
  try {
    const moods = await prisma.mood.findMany({
      include: {
        _count: {
          select: { reviews: true }
        }
      }
    });
    res.json(moods);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific mood
const getMood = async (req, res) => {
  try {
    const { id } = req.params;
    const mood = await prisma.mood.findUnique({
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
    if (!mood) {
      return res.status(404).json({ error: 'Mood not found' });
    }
    res.json(mood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a mood
const updateMood = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const mood = await prisma.mood.update({
      where: { id: parseInt(id) },
      data: { name }
    });
    res.json(mood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a mood
const deleteMood = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.mood.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createMood,
  getAllMoods,
  getMood,
  updateMood,
  deleteMood
}; 