import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";
import 'rxjs/add/observable/throw';
import { Book } from "../books/book.model";
import { Address } from "../auth/address.model";
export var TradeService = (function () {
    function TradeService(http) {
        this.http = http;
        this.sentBooks = [];
        this.receivedBooks = [];
    }
    TradeService.prototype.acceptRequest = function (book) {
        this.receivedBooks.splice(this.receivedBooks.indexOf(book), 1);
        var body = JSON.stringify(book);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch('https://bookstrade.herokuapp.com/trades/' + book.tradeId + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TradeService.prototype.deleteRequest = function (book) {
        this.sentBooks.splice(this.sentBooks.indexOf(book), 1);
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('https://bookstrade.herokuapp.com/trades/' + book.tradeId + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TradeService.prototype.rejectRequest = function (book) {
        this.receivedBooks.splice(this.receivedBooks.indexOf(book), 1);
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete('https://bookstrade.herokuapp.com/trades/reject/' + book.tradeId + token)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TradeService.prototype.sendRequest = function (book) {
        var body = JSON.stringify(book);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('https://bookstrade.herokuapp.com/trades/' + book.bookId + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TradeService.prototype.getMyRequests = function () {
        var _this = this;
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('https://bookstrade.herokuapp.com/trades' + token)
            .map(function (response) {
            var requests = response.json().obj;
            var sentRequests = [];
            console.log(requests);
            for (var _i = 0, requests_1 = requests; _i < requests_1.length; _i++) {
                var request = requests_1[_i];
                sentRequests.push(new Book(request.book.title, request.book.author, request.book.image, request.book.description, undefined, undefined, request.book._id, request.book.user._id, request.receiver.firstName, undefined, undefined, request._id));
            }
            _this.sentBooks = sentRequests;
            return sentRequests;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TradeService.prototype.getMyReceived = function () {
        var _this = this;
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('https://bookstrade.herokuapp.com/trades/received' + token)
            .map(function (response) {
            var trades = response.json().obj;
            var receivedRequests = [];
            for (var _i = 0, trades_1 = trades; _i < trades_1.length; _i++) {
                var trade = trades_1[_i];
                receivedRequests.push(new Book(trade.book.title, trade.book.author, trade.book.image, trade.book.description, undefined, undefined, trade.book._id, trade.book.user._id, undefined, trade.sender.firstName, trade.sender._id, trade._id));
            }
            _this.receivedBooks = receivedRequests;
            return receivedRequests;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TradeService.prototype.getRequesterAddress = function (book) {
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get('https://bookstrade.herokuapp.com/trades/address/' + book.requesterId + token)
            .map(function (response) {
            var add = response.json().obj;
            var address = new Address(add.address1, add.address2, add.city, add.state, add.zip, add.country);
            console.log(address);
            return address;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TradeService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TradeService.ctorParameters = [
        { type: Http, },
    ];
    return TradeService;
}());
//# sourceMappingURL=trade.service.js.map