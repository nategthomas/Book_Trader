import { Component, Input } from '@angular/core';
import { BookService } from "./book.service";
export var SingleBook = (function () {
    function SingleBook(bookService) {
        this.bookService = bookService;
    }
    SingleBook.prototype.onClick = function () {
        this.bookService.clickedBook(this.book);
    };
    SingleBook.decorators = [
        { type: Component, args: [{
                    selector: 'app-singlebook',
                    templateUrl: './singlebook.component.html',
                    styleUrls: ['./singlebook.component.css']
                },] },
    ];
    /** @nocollapse */
    SingleBook.ctorParameters = [
        { type: BookService, },
    ];
    SingleBook.propDecorators = {
        'book': [{ type: Input },],
    };
    return SingleBook;
}());
//# sourceMappingURL=singlebook.component.js.map