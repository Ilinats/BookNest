class Book {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.author = data.author;
    this.publishDate = data.publishDate;
    this.averageRating = data.averageRating;
    this.language = data.language;
    this.reviewCount = data.reviewCount;
    this.pages = data.pages;
    this.description = data.description;
    this.coverUrl = data.coverUrl;
  }

  validate() {
    const errors = [];
    
    if (!this.title?.trim()) {
      errors.push('Title is required');
    }
    
    if (!this.author?.trim()) {
      errors.push('Author is required');
    }
    
    if (!this.publishDate) {
      errors.push('Publish date is required');
    }
    
    if (!this.pages || this.pages <= 0) {
      errors.push('Pages must be a positive number');
    }
    
    if (this.averageRating && (this.averageRating < 0 || this.averageRating > 5)) {
      errors.push('Average rating must be between 0 and 5');
    }
    
    return errors;
  }

  sanitize() {
    return {
      ...this,
      title: this.title?.trim(),
      author: this.author?.trim(),
      language: this.language?.trim(),
      description: this.description?.trim(),
      coverUrl: this.coverUrl?.trim()
    };
  }
}