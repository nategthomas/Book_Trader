import {Http, Headers, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";

import {User} from "./user.model";
import {Address} from "./address.model";


@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  enterAddress(address: Address) {
    const body = JSON.stringify(address);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : '';
    return this.http.post('https://bookstrade.herokuapp.com/user/address' + token, body, {headers: headers})
      .map((response: Response) => {
        address = response.json();
        console.log(address)
      })
      .catch((error: Response) =>  Observable.throw(error.json()));
  }

getUserName() {
  localStorage.getItem('userName');
}

signUp(user: User) {
  const body = JSON.stringify(user);
  const headers = new Headers({'Content-Type': 'text/plain'});
  return this.http.post('https://bookstrade.herokuapp.com/user', body, {headers: headers})
    .map((response: Response) => response.json())
    .catch((error: Response) =>  Observable.throw(error.json()));
}

signIn(user: User) {
  const body = JSON.stringify(user);
  const headers = new Headers({'Content-Type': 'application/json'});
  return this.http.post('https://bookstrade.herokuapp.com/user/signin', body, {headers: headers})
    .map((response: Response) => response.json())
    .catch((error: Response) =>  Observable.throw(error.json()));
}

logout() {
  localStorage.clear();
}

isLoggedIn() {
  return localStorage.getItem('token') !== null;
}
}
