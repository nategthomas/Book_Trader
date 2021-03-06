import {Component, OnInit, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";

import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-header',
  template: `
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand brander"><b>The Book Trader</b></a>
          </div>
          <ul class="nav navbar-nav navig">
            <li routerLinkActive="active"><a [routerLink]="['/browsebooks']">Browse Books</a></li>
            <li routerLinkActive="active"><a [routerLink]="['/book']">Add a Book</a></li>
            <li routerLinkActive="active" *ngIf="isLoggedIn()" ><a [routerLink]="['/mybooks']">My Books</a></li>
            <li routerLinkActive="active" *ngIf="isLoggedIn()" ><a [routerLink]="['/mytrades']">My Trades</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right navig">
          <li routerLinkActive="active"  *ngIf="!isLoggedIn()"><a [routerLink]="['/auth']">Authentication</a></li>
          <li routerLinkActive="active"  *ngIf="isLoggedIn()" ><a [routerLink]="['/address']">Address</a></li>
          <li routerLinkActive = "active" *ngIf="isLoggedIn()" ><a id="logout" (click)="onLogout()">Logout {{user}}</a></li>
          </ul>
        </div>
      </nav>
  `,
  styles: [`
    .brander {
      font-size: 1.4em;
      margin-right: 20px;
    }
    .navig {
      font-size: 1.3em;
    }
    #logout {
      cursor: pointer;
    }
  `]
})

export class HeaderComponent implements OnInit, AfterViewInit {
  private user: string = '';

  getUser() {
    return localStorage.getItem("userName");
  }

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.user = this.getUser();
    }, 3000);
    }

  ngAfterViewInit() {
    console.log(this.user);
  }

  onLogout() {
    this.user = '';
    this.authService.logout();
    this.router.navigate(['/auth', 'signin'])
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }


}
