class Pagination {
  constructor(page = 1, limit = 10) {
    this.page = Math.max(1, parseInt(page));
    this.limit = Math.min(100, Math.max(1, parseInt(limit)));
    this.skip = (this.page - 1) * this.limit;
  }
}