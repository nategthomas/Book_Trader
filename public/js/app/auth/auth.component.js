import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
export var AuthComponent = (function () {
    function AuthComponent(authService) {
        this.authService = authService;
    }
    AuthComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AuthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-auth',
                    template: "\n    <div class=\"row spacing\">\n      <nav class=\"col-md-10 col-md-offset-1\">\n        <ul class='nav nav-tabs'>\n        <li routerLinkActive = \"active\" ><a [routerLink]=\"['signup']\">Sign Up</a></li>\n        <li routerLinkActive = \"active\" ><a [routerLink]=\"['signin']\">Sign In</a></li>    \n        </ul>\n      </nav>\n    </div>\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AuthComponent.ctorParameters = [
        { type: AuthService, },
    ];
    return AuthComponent;
}());
//# sourceMappingURL=auth.component.js.map