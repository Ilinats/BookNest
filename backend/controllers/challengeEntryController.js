const challengeEntryService = require('../services/challengeEntryService');

// Add a book to a challenge
const addBookToChallenge = async (req, res, next) => {
  try {
    const { challengeId, bookId, finishedAt } = req.body;
    const entry = await challengeEntryService.addBookToChallenge({
      challengeId,
      bookId,
      finishedAt
    });
    res.status(201).json(entry);
  } catch (error) {
    next(error);
  }
};

// Get all entries in a challenge
const getChallengeEntries = async (req, res, next) => {
  try {
    const { challengeId } = req.params;
    const entries = await challengeEntryService.getChallengeEntries(parseInt(challengeId));
    res.json(entries);
  } catch (error) {
    next(error);
  }
};

// Get a specific challenge entry
const getChallengeEntry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const entry = await challengeEntryService.getChallengeEntry(parseInt(id));
    if (!entry) {
      return res.status(404).json({ error: 'Challenge entry not found' });
    }
    res.json(entry);
  } catch (error) {
    next(error);
  }
};

// Remove a book from a challenge
const removeBookFromChallenge = async (req, res, next) => {
  try {
    const { entryId } = req.params;
    await challengeEntryService.removeBookFromChallenge(parseInt(entryId));
    res.json({ message: 'Book removed from challenge successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addBookToChallenge,
  getChallengeEntries,
  getChallengeEntry,
  removeBookFromChallenge
};