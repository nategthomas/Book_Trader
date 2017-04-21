import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth/auth.service";
export var HeaderComponent = (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = '';
        this.isDataAvailable = false;
    }
    HeaderComponent.prototype.getUser = function () {
        return localStorage.getItem("userName");
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = this.getUser();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    template: "\n      <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <a class=\"navbar-brand brander\"><b>The Book Trader</b></a>\n          </div>\n          <ul class=\"nav navbar-nav navig\">\n            <li routerLinkActive=\"active\"><a [routerLink]=\"['/browsebooks']\">Browse Books</a></li>\n            <li routerLinkActive=\"active\"><a [routerLink]=\"['/book']\">Add a Book</a></li>\n            <li routerLinkActive=\"active\" *ngIf=\"isLoggedIn()\" ><a [routerLink]=\"['/mybooks']\">My Books</a></li>\n            <li routerLinkActive=\"active\" *ngIf=\"isLoggedIn()\" ><a [routerLink]=\"['/mytrades']\">My Trades</a></li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right navig\">\n          <li routerLinkActive=\"active\"  *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['/auth']\">Authentication</a></li>\n          <li routerLinkActive=\"active\"  *ngIf=\"isLoggedIn()\" ><a [routerLink]=\"['/address']\">Address</a></li>\n          <li routerLinkActive = \"active\" *ngIf=\"isLoggedIn()\" ><a id=\"logout\" (click)=\"onLogout()\">Logout {{user}}</a></li>\n          </ul>\n        </div>\n      </nav>\n  ",
                    styles: ["\n    .brander {\n      font-size: 1.4em;\n      margin-right: 20px;\n    }\n    .navig {\n      font-size: 1.3em;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = [
        { type: AuthService, },
        { type: Router, },
    ];
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map