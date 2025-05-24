class DeleteBookUseCase {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute(id) {
    const bookId = parseInt(id);
    if (isNaN(bookId)) {
      throw new Error('Invalid book ID');
    }

    const book = await this.bookRepository.findById(bookId);
    if (!book) {
      throw new Error('Book not found');
    }

    if (book._count && (book._count.reviews > 0 || book._count.inLibraries > 0 || book._count.inChallenges > 0)) {
      throw new Error('Cannot delete book with existing reviews, library entries, or challenge entries');
    }

    await this.bookRepository.delete(bookId);
    return true;
  }
}