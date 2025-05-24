class UpdateBookUseCase {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute(id, updateData) {
    const bookId = parseInt(id);
    if (isNaN(bookId)) {
      throw new Error('Invalid book ID');
    }

    const existingBook = await this.bookRepository.findById(bookId);
    if (!existingBook) {
      throw new Error('Book not found');
    }

    const bookToUpdate = new Book({ ...existingBook, ...updateData });
    
    if (Object.keys(updateData).length > 0) {
      const errors = bookToUpdate.validate();
      if (errors.length > 0) {
        throw new Error(`Validation failed: ${errors.join(', ')}`);
      }
    }

    const sanitizedData = bookToUpdate.sanitize();
    return await this.bookRepository.update(bookId, sanitizedData);
  }
}
