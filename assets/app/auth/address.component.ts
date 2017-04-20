import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "./auth.service";
import {User} from "./user.model";
import {Address} from "./address.model";


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styles: [`
              .container {
                margin-top: 0px;
              }
              h2 {
                margin: 0px;
              }
              .row {
                margin-top: 0px;
              }
              #hook {
                margin: 0px 0px 5px 0px;
                color: grey;
              }
              button {
                margin-top: 10px;
              }
          `]
})
export class AddressComponent implements OnInit{
  myForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}


  onSubmit() {
    const address = new Address(
      this.myForm.value.address1,
      this.myForm.value.address2,
      this.myForm.value.city,
      this.myForm.value.state,
      this.myForm.value.zip,
      "United States"
    )
    this.authService.enterAddress(address).subscribe(
      data => console.log(data),
      error => console.error(error)
    )
  this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
        address1: new FormControl(null, Validators.required),
        address2: new FormControl(null),
        city: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),
        zip: new FormControl(null, Validators.required)

    });
  }
}
