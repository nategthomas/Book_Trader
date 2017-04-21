import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Address } from "./address.model";
export var AddressComponent = (function () {
    function AddressComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AddressComponent.prototype.onSubmit = function () {
        var address = new Address(this.myForm.value.address1, this.myForm.value.address2, this.myForm.value.city, this.myForm.value.state, this.myForm.value.zip, "United States");
        this.authService.enterAddress(address).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.myForm.reset();
    };
    AddressComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            address1: new FormControl(null, Validators.required),
            address2: new FormControl(null),
            city: new FormControl(null, Validators.required),
            state: new FormControl(null, Validators.required),
            zip: new FormControl(null, Validators.required)
        });
    };
    AddressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-address',
                    templateUrl: './address.component.html',
                    styles: ["\n              .container {\n                margin-top: 0px;\n              }\n              h2 {\n                margin: 0px;\n              }\n              .row {\n                margin-top: 0px;\n              }\n              #hook {\n                margin: 0px 0px 5px 0px;\n                color: grey;\n              }\n              button {\n                margin-top: 10px;\n              }\n          "]
                },] },
    ];
    /** @nocollapse */
    AddressComponent.ctorParameters = [
        { type: AuthService, },
        { type: Router, },
    ];
    return AddressComponent;
}());
//# sourceMappingURL=address.component.js.map