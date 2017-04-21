import { Component } from '@angular/core';
import { BookService } from "./book.service";
export var MyBooksComponent = (function () {
    function MyBooksComponent(bookService) {
        this.bookService = bookService;
        this.display = 'none';
    }
    MyBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getMyBooks()
            .subscribe(function (books) {
            _this.books = books;
        });
        this.bookService.bookisClicked.subscribe(function (book) { return _this.book = book; });
    };
    MyBooksComponent.prototype.onRemove = function () {
        this.bookService.onRemove(this.book).subscribe(function (book) { return console.log(book); });
    };
    MyBooksComponent.prototype.onClick = function () {
        this.display = "block";
    };
    MyBooksComponent.prototype.closeWindow = function () {
        this.display = 'none';
    };
    MyBooksComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-mybooks',
                    templateUrl: './mybooks.component.html',
                    styleUrls: ['./singlebook.component.css']
                },] },
    ];
    /** @nocollapse */
    MyBooksComponent.ctorParameters = [
        { type: BookService, },
    ];
    return MyBooksComponent;
}());
//# sourceMappingURL=mybooks.component.js.map