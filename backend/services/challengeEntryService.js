const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Add a book to a challenge
const addBookToChallenge = async (entryData) => {
  const { challengeId, bookId, finishedAt } = entryData;
  
  const entry = await prisma.challengeEntry.create({
    data: {
      challengeId: parseInt(challengeId),
      bookId: parseInt(bookId),
      finishedAt: finishedAt ? new Date(finishedAt) : new Date()
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

  return entry;
};

// Get all entries in a challenge
const getChallengeEntries = async (challengeId) => {
  const entries = await prisma.challengeEntry.findMany({
    where: { challengeId: challengeId },
    include: {
      book: true
    }
  });
  return entries;
};

// Get a specific challenge entry
const getChallengeEntry = async (id) => {
  const entry = await prisma.challengeEntry.findUnique({
    where: { id: id },
    include: {
      book: true
    }
  });
  return entry;
};

// Remove a book from a challenge
const removeBookFromChallenge = async (entryId) => {
  const entry = await prisma.challengeEntry.findUnique({
    where: { id: entryId }
  });

  if (!entry) {
    throw new Error('Challenge entry not found');
  }

  // Delete the entry
  const deletedEntry = await prisma.challengeEntry.delete({
    where: { id: entryId }
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

  return deletedEntry;
};

module.exports = {
  addBookToChallenge,
  getChallengeEntries,
  getChallengeEntry,
  removeBookFromChallenge
};