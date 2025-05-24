class BookFilter {
  constructor(data = {}) {
    this.author = data.author;
    this.title = data.title;
    this.language = data.language;
    this.search = data.search; // General search term for title and author
    this.minRating = data.minRating ? parseFloat(data.minRating) : null;
    this.minPages = data.minPages ? parseInt(data.minPages) : null;
    this.maxPages = data.maxPages ? parseInt(data.maxPages) : null;
    this.sortBy = data.sortBy || 'title';
    this.sortOrder = data.sortOrder || 'asc';
  }

  validate() {
    const errors = [];
    
    if (this.minRating && (this.minRating < 0 || this.minRating > 5)) {
      errors.push('Minimum rating must be between 0 and 5');
    }
    
    if (this.minPages && this.minPages < 0) {
      errors.push('Minimum pages must be a positive number');
    }
    
    if (this.maxPages && this.maxPages < 0) {
      errors.push('Maximum pages must be a positive number');
    }
    
    if (this.minPages && this.maxPages && this.minPages > this.maxPages) {
      errors.push('Minimum pages cannot be greater than maximum pages');
    }
    
    return errors;
  }
}