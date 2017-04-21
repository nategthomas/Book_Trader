import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BookService } from "./book.service";
export var BookComponent = (function () {
    function BookComponent(bookService, router) {
        this.bookService = bookService;
        this.router = router;
        this.display = "none";
    }
    BookComponent.prototype.onSubmit = function () {
        var _this = this;
        this.bookService.getBooks(this.myForm.value.search)
            .subscribe(function (books) {
            _this.books = books;
        });
    };
    BookComponent.prototype.onClick = function () {
        this.display = "block";
    };
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = new FormGroup({
            search: new FormControl(null, Validators.required),
        });
        this.bookService.bookisClicked.subscribe(function (book) { return _this.book = book; });
    };
    BookComponent.prototype.addABook = function () {
        console.log(this.book);
        this.bookService.addBook(this.book)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.router.navigateByUrl('/mybooks');
    };
    BookComponent.prototype.closeWindow = function () {
        this.display = 'none';
    };
    BookComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-book',
                    templateUrl: './book.component.html',
                    styles: ["\n    #label {\n      font-size: 1.4em;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    BookComponent.ctorParameters = [
        { type: BookService, },
        { type: Router, },
    ];
    return BookComponent;
}());
//# sourceMappingURL=book.component.js.map