import { Component } from '@angular/core';
import { TradeService } from "./trade.service";
export var MyTradesComponent = (function () {
    function MyTradesComponent(tradeService) {
        this.tradeService = tradeService;
    }
    MyTradesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tradeService.getMyRequests()
            .subscribe(function (sentRequests) {
            _this.sentRequests = sentRequests;
            console.log(_this.sentRequests);
        });
        this.tradeService.getMyReceived()
            .subscribe(function (receivedRequests) {
            _this.receivedRequests = receivedRequests;
            console.log(_this.receivedRequests);
        });
    };
    MyTradesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-mytrades',
                    templateUrl: './mytrades.component.html'
                },] },
    ];
    /** @nocollapse */
    MyTradesComponent.ctorParameters = [
        { type: TradeService, },
    ];
    return MyTradesComponent;
}());
//# sourceMappingURL=mytrades.component.js.map