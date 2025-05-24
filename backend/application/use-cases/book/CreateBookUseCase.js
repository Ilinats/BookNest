class CreateBookUseCase {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute(bookData) {
    const book = new Book(bookData);
    
    const errors = book.validate();
    if (errors.length > 0) {
      throw new Error(`Validation failed: ${errors.join(', ')}`);
    }

    const existingBook = await this.bookRepository.findByTitleAndAuthor(
      book.title, 
      book.author
    );
    
    if (existingBook) {
      throw new Error('Book already exists');
    }

    const sanitizedBook = book.sanitize();
    return await this.bookRepository.create(sanitizedBook);
  }
}