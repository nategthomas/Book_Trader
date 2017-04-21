export var Book = (function () {
    function Book(title, author, image, description, pageCount, isbn, bookId, userId, owner, requester, requesterId, tradeId) {
        this.title = title;
        this.author = author;
        this.image = image;
        this.description = description;
        this.pageCount = pageCount;
        this.isbn = isbn;
        this.bookId = bookId;
        this.userId = userId;
        this.owner = owner;
        this.requester = requester;
        this.requesterId = requesterId;
        this.tradeId = tradeId;
    }
    return Book;
}());
//# sourceMappingURL=book.model.js.map