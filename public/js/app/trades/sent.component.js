import { Component, Input } from '@angular/core';
import { TradeService } from "./trade.service";
export var Sent = (function () {
    function Sent(tradeService) {
        this.tradeService = tradeService;
    }
    Sent.prototype.onCancel = function () {
        this.tradeService.deleteRequest(this.book).subscribe(function (data) { return console.log(data); });
    };
    Sent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sent',
                    templateUrl: './sent.component.html',
                    styles: [
                        ".container {\n    background: white;\n    font-size: 1.3em;\n    width: 500px;\n    margin: 0 auto;\n    margin-bottom: 25px;\n    padding: 20px;\n    text-align: left;\n    position: relative;\n    border: solid 2px grey;\n    border-radius: 5px;\n  }"
                    ]
                },] },
    ];
    /** @nocollapse */
    Sent.ctorParameters = [
        { type: TradeService, },
    ];
    Sent.propDecorators = {
        'book': [{ type: Input },],
    };
    return Sent;
}());
//# sourceMappingURL=sent.component.js.map