import { Component, Input } from '@angular/core';
import { BookService } from "./book.service";
import { TradeService } from "../trades/trade.service";
export var SingleTrade = (function () {
    function SingleTrade(bookService, tradeService) {
        this.bookService = bookService;
        this.tradeService = tradeService;
    }
    SingleTrade.prototype.onSend = function () {
        this.tradeService.sendRequest(this.book).subscribe(function (book) { return console.log(book); });
    };
    SingleTrade.prototype.onRequest = function (element, text) {
        element.textContent = text;
        element.disabled = true;
    };
    SingleTrade.decorators = [
        { type: Component, args: [{
                    selector: 'app-singletrade',
                    templateUrl: './singletrade.component.html',
                    styleUrls: ['./singletrade.component.css']
                },] },
    ];
    /** @nocollapse */
    SingleTrade.ctorParameters = [
        { type: BookService, },
        { type: TradeService, },
    ];
    SingleTrade.propDecorators = {
        'book': [{ type: Input },],
    };
    return SingleTrade;
}());
//# sourceMappingURL=singletrade.component.js.map