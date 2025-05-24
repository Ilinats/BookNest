class IBookRepository {
  async findAll(filter, pagination) {
    throw new Error('Method not implemented');
  }

  async findById(id) {
    throw new Error('Method not implemented');
  }

  async findByTitleAndAuthor(title, author) {
    throw new Error('Method not implemented');
  }

  async create(book) {
    throw new Error('Method not implemented');
  }

  async update(id, book) {
    throw new Error('Method not implemented');
  }

  async delete(id) {
    throw new Error('Method not implemented');
  }

  async count(filter) {
    throw new Error('Method not implemented');
  }
}