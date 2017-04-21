import { Component } from '@angular/core';
import { BookService } from "./book.service";
export var BrowseBooksComponent = (function () {
    function BrowseBooksComponent(bookService) {
        this.bookService = bookService;
    }
    BrowseBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getAllBooks().subscribe(function (books) { return _this.books = books; });
    };
    BrowseBooksComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-browsebooks',
                    template: "\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"title well col-md-offset-2 col-md-8 col-md-offset-2\">\n      <div id=\"one\"> Browse and hit Request Book to send the owner a request </div>\n      </div>\n    </div>\n      <div class=\"row\">\n      <app-singletrade\n      class=\"book-results\"\n      [book]='book'\n      *ngFor=\"let book of books\">\n      </app-singletrade>\n      </div>\n  </div>\n  ",
                    styles: ["\n    .title {\n      font-size: 1.7em;\n      margin-bottom: 15px;\n    }\n    #one {\n      margin: 0px 54px 0px 54px;\n    }\n    "]
                },] },
    ];
    /** @nocollapse */
    BrowseBooksComponent.ctorParameters = [
        { type: BookService, },
    ];
    return BrowseBooksComponent;
}());
//# sourceMappingURL=browsebooks.component.js.map