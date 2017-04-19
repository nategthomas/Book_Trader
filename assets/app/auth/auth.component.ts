import {Component} from "@angular/core";

import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  template: `
    <div class="row spacing">
      <nav class="col-md-10 col-md-offset-1">
        <ul class='nav nav-tabs'>
        <li routerLinkActive = "active" ><a [routerLink]="['signup']">Sign Up</a></li>
        <li routerLinkActive = "active" ><a [routerLink]="['signin']">Sign In</a></li>    
        </ul>
      </nav>
    </div>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AuthComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
