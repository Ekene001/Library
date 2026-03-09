export const Book = class {
  constructor({id, title, author, pageCount, isRead = false, isBookmarked = false, isDeleted = false}) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
    this.isBookmarked = isBookmarked;
    this.isDeleted = isDeleted;
  }

  toggleisRead() {
    this.isRead = !this.isRead;
  }

  toggleIsBookmarked() {
    this.isBookmarked = !this.isBookmarked;
    // this sets the default value of status to false and then flips it from false to true/true to false
  }
  toggleIsDeleted() {
    this.isDeleted = !this.isDeleted;
  }
};
