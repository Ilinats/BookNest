const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Add a book to a challenge
const addBookToChallenge = async (req, res) => {
  try {
    const { challengeId, bookId, finishedAt } = req.body;
    const entry = await prisma.challengeEntry.create({
      data: {
        challengeId: parseInt(challengeId),
        bookId: parseInt(bookId),
        finishedAt: new Date(finishedAt)
      },
      include: {
        book: true
      }
    });

    // Update the challenge's completed count
    await prisma.readingChallenge.update({
      where: { id: parseInt(challengeId) },
      data: {
        completed: {
          increment: 1
        }
      }
    });

    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all entries in a challenge
const getChallengeEntries = async (req, res) => {
  try {
    const { challengeId } = req.params;
    const entries = await prisma.challengeEntry.findMany({
      where: { challengeId: parseInt(challengeId) },
      include: {
        book: true
      }
    });
    res.json(entries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific challenge entry
const getChallengeEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await prisma.challengeEntry.findUnique({
      where: { id: parseInt(id) },
      include: {
        book: true
      }
    });
    if (!entry) {
      return res.status(404).json({ error: 'Challenge entry not found' });
    }
    res.json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove a book from a challenge
const removeBookFromChallenge = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await prisma.challengeEntry.findUnique({
      where: { id: parseInt(id) }
    });

    if (!entry) {
      return res.status(404).json({ error: 'Challenge entry not found' });
    }

    // Delete the entry
    await prisma.challengeEntry.delete({
      where: { id: parseInt(id) }
    });

    // Update the challenge's completed count
    await prisma.readingChallenge.update({
      where: { id: entry.challengeId },
      data: {
        completed: {
          decrement: 1
        }
      }
    });

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addBookToChallenge,
  getChallengeEntries,
  getChallengeEntry,
  removeBookFromChallenge
}; 