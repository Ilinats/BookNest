class GetBooksUseCase {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute(filterData, paginationData) {
    const filter = new BookFilter(filterData);
    
    const filterErrors = filter.validate();
    if (filterErrors.length > 0) {
      throw new Error(`Filter validation failed: ${filterErrors.join(', ')}`);
    }
    
    const pagination = new Pagination(paginationData.page, paginationData.limit);
    
    const [books, totalCount] = await Promise.all([
      this.bookRepository.findAll(filter, pagination),
      this.bookRepository.count(filter)
    ]);

    return {
      books,
      pagination: {
        currentPage: pagination.page,
        totalPages: Math.ceil(totalCount / pagination.limit),
        totalItems: totalCount,
        itemsPerPage: pagination.limit
      }
    };
  }
}