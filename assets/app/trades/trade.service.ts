import {Injectable, EventEmitter} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Observable} from "rxjs";
import 'rxjs/add/observable/throw';

import {Book} from "../books/book.model";

@Injectable()
export class TradeService {
  constructor(private http: Http) {}
  private sentBooks: Book[] = [];
  private receivedBooks: Book[] = [];


  acceptRequest(book: Book) {
    this.receivedBooks.splice(this.receivedBooks.indexOf(book), 1);
    const body = JSON.stringify(book);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : ''
    return this.http.patch('http://localhost:3000/trades/' + book.tradeId + token, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteRequest(book: Book) {
    this.sentBooks.splice(this.sentBooks.indexOf(book), 1);
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : ''
    return this.http.delete('http://localhost:3000/trades/' + book.tradeId + token)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  rejectRequest(book: Book) {
    this.receivedBooks.splice(this.receivedBooks.indexOf(book), 1);
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : ''
    return this.http.delete('http://localhost:3000/trades/reject/' + book.tradeId + token)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  sendRequest(book: Book) {
    const body = JSON.stringify(book);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : ''
    return this.http.post('http://localhost:3000/trades/' + book.bookId + token, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getMyRequests() {
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : ''
    return this.http.get('http://localhost:3000/trades' + token)
      .map((response: Response) => {
        var requests = response.json().obj;
        var sentRequests: Book[] = [];
        console.log(requests);
        for (let request of requests) {
          sentRequests.push(new Book(request.book.title,
                                request.book.author,
                                request.book.image,
                                request.book.description,
                                undefined,
                                undefined,
                                request.book._id,
                                request.book.user._id,
                                request.receiver.firstName,
                                undefined,
                                undefined,
                                request._id))
        }
      this.sentBooks = sentRequests;
      return sentRequests;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getMyReceived() {
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : ''
    return this.http.get('http://localhost:3000/trades/received' + token)
      .map((response: Response) => {
        var trades = response.json().obj;
        var receivedRequests: Book[] = [];
        for (let trade of trades) {
          receivedRequests.push(new Book(trade.book.title,
                                trade.book.author,
                                trade.book.image,
                                trade.book.description,
                                undefined,
                                undefined,
                                trade.book._id,
                                trade.book.user._id,
                                undefined,
                                trade.sender.firstName,
                                trade.sender._id,
                                trade._id))
        }
      this.receivedBooks = receivedRequests;
      return receivedRequests;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
