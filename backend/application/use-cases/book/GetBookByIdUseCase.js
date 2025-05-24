class GetBookByIdUseCase {
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

    return book;
  }
}