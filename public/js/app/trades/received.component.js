import { Component, Input } from '@angular/core';
import { TradeService } from "./trade.service";
export var Received = (function () {
    function Received(tradeService) {
        this.tradeService = tradeService;
        this.display = 'none';
    }
    Received.prototype.ngOnInit = function () {
        console.log(this.book);
    };
    Received.prototype.onReject = function () {
        this.tradeService.rejectRequest(this.book).subscribe(function (data) { return console.log(data); });
    };
    Received.prototype.onAccept = function () {
        var _this = this;
        this.tradeService.getRequesterAddress(this.book).subscribe(function (data) { return _this.requester = data; }, function (error) { return console.error(error); });
        this.display = "block";
    };
    Received.prototype.onSendBook = function () {
        this.tradeService.acceptRequest(this.book).subscribe(function (data) { return console.log(data); });
    };
    Received.prototype.closeWindow = function () {
        this.display = 'none';
    };
    Received.decorators = [
        { type: Component, args: [{
                    selector: 'app-received',
                    templateUrl: './received.component.html',
                    styles: [
                        ".container {\n    background: white;\n    font-size: 1.3em;\n    width: 500px;\n    margin: 0 auto;\n    margin-bottom: 25px;\n    padding: 20px;\n    text-align: left;\n    position: relative;\n    border: solid 2px grey;\n    border-radius: 5px;\n  }"
                    ]
                },] },
    ];
    /** @nocollapse */
    Received.ctorParameters = [
        { type: TradeService, },
    ];
    Received.propDecorators = {
        'book': [{ type: Input },],
    };
    return Received;
}());
//# sourceMappingURL=received.component.js.map