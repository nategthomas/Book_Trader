import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
export var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.enterAddress = function (address) {
        var body = JSON.stringify(address);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('https://bookstrade.herokuapp.com/user/address' + token, body, { headers: headers })
            .map(function (response) {
            address = response.json();
            console.log(address);
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.getUserName = function () {
        localStorage.getItem('userName');
    };
    AuthService.prototype.signUp = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'text/plain' });
        return this.http.post('https://bookstrade.herokuapp.com/user', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.signIn = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://bookstrade.herokuapp.com/user/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = [
        { type: Http, },
    ];
    return AuthService;
}());
//# sourceMappingURL=auth.service.js.map