import { Injectable, EventEmitter } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";
import 'rxjs/add/observable/throw';
import { Book } from "./book.model";
export var BookService = (function () {
    function BookService(http) {
        this.http = http;
        this.books = [];
        this.bookisClicked = new EventEmitter();
    }
    BookService.prototype.clickedBook = function (book) {
        this.bookisClicked.emit(book);
    };
    BookService.prototype.onRemove = function (book) {
        this.books.splice(this.books.indexOf(book), 1);
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('https://bookstrade.herokuapp.com/books/' + book.bookId + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    BookService.prototype.getAllBooks = function () {
        return this.http.get('https://bookstrade.herokuapp.com/books')
            .map(function (response) {
            var books = response.json().obj;
            var browseBooks = [];
            for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
                var book = books_1[_i];
                browseBooks.push(new Book(book.title, book.author, book.image, book.description, undefined, undefined, book._id, book.user._id, book.user.firstName));
            }
            console.log(browseBooks);
            return browseBooks;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    BookService.prototype.getMyBooks = function () {
        var _this = this;
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('https://bookstrade.herokuapp.com/books/mybooks' + token)
            .map(function (response) {
            var books = response.json().obj;
            var transformedBooks = [];
            for (var _i = 0, books_2 = books; _i < books_2.length; _i++) {
                var book = books_2[_i];
                transformedBooks.push(new Book(book.title, book.author, book.image, book.description, undefined, undefined, book._id, book.user._id));
            }
            console.log(transformedBooks);
            _this.books = transformedBooks;
            return transformedBooks;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    BookService.prototype.addBook = function (book) {
        var body = JSON.stringify(book);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('https://bookstrade.herokuapp.com/books' + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    BookService.prototype.getBooks = function (search) {
        return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + search)
            .map(function (response) {
            var books = response.json().items;
            console.log(books);
            var transBook = [];
            for (var _i = 0, books_3 = books; _i < books_3.length; _i++) {
                var book = books_3[_i];
                var author = book.volumeInfo.authors
                    ? book.volumeInfo.authors[0]
                    : undefined;
                var thumbnail = book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : 'NoImageAvailable.png';
                var description = book.volumeInfo.description
                    ? book.volumeInfo.description
                    : "No Description provided";
                transBook.push(new Book(book.volumeInfo.title, author, thumbnail, description, undefined, undefined));
            }
            console.log(transBook);
            return transBook;
        });
    };
    BookService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BookService.ctorParameters = [
        { type: Http, },
    ];
    return BookService;
}());
//# sourceMappingURL=book.service.js.map