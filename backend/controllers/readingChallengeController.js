const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new reading challenge
const createChallenge = async (req, res) => {
  try {
    const { name, startDate, endDate, goal, userId } = req.body;
    const challenge = await prisma.readingChallenge.create({
      data: {
        name,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        goal,
        userId
      }
    });
    res.status(201).json(challenge);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all challenges for a user
const getUserChallenges = async (req, res) => {
  try {
    const { userId } = req.params;
    const challenges = await prisma.readingChallenge.findMany({
      where: { userId: parseInt(userId) },
      include: {
        entries: {
          include: {
            book: true
          }
        }
      }
    });
    res.json(challenges);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific challenge
const getChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const challenge = await prisma.readingChallenge.findUnique({
      where: { id: parseInt(id) },
      include: {
        entries: {
          include: {
            book: true
          }
        }
      }
    });
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }
    res.json(challenge);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a challenge
const updateChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, startDate, endDate, goal, completed } = req.body;
    const challenge = await prisma.readingChallenge.update({
      where: { id: parseInt(id) },
      data: {
        name,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : undefined,
        goal,
        completed
      }
    });
    res.json(challenge);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a challenge
const deleteChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.readingChallenge.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCurrentChallenge = async (req, res) => {
  try {
    const userId = req.user.userId
    console.log('Fetching current challenges for user:', userId);
    const currentDate = new Date();
    
    const challenges = await prisma.readingChallenge.findMany({
      where: {
        userId,
        OR: [
          // Current challenges (started but not ended)
          {
            startDate: { lte: currentDate },
            endDate: { gte: currentDate }
          },
          // Upcoming challenges (not started yet)
          {
            startDate: { gt: currentDate }
          }
        ]
      },
      include: {
        entries: {
          include: {
            book: true
          }
        }
      },
      orderBy: {
        startDate: 'asc'
      }
    });
    
    // Transform the data to match frontend expectations
    const transformedChallenges = challenges.map(challenge => ({
      id: challenge.id,
      title: challenge.name,
      description: `Read ${challenge.goal} books by ${new Date(challenge.endDate).toLocaleDateString()}`,
      targetBooks: challenge.goal,
      completedBooks: challenge.completed,
      startDate: challenge.startDate,
      endDate: challenge.endDate,
      entries: challenge.entries,
      status: new Date(challenge.startDate) > currentDate ? 'upcoming' : 'active'
    }));
    
    // Always return an array, even if empty
    res.json(transformedChallenges);
    
  } catch (error) {
    console.error('Error fetching current challenges:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createChallenge,
  getUserChallenges,
  getChallenge,
  updateChallenge,
  deleteChallenge,
  getCurrentChallenge
};