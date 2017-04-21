import { Component, OnInit } from '@angular/core';

import { BookService} from "./book.service";
import {Book} from "./book.model";

@Component({
  selector: 'app-browsebooks',
  template: `

  <div class="container">
    <div class="row">
      <div class="title well col-md-offset-2 col-md-8 col-md-offset-2">
      <div id="one"> Browse and hit Request Book to send the owner a request </div>
      </div>
    </div>
      <div class="row">
      <app-singletrade
      class="book-results"
      [book]='book'
      *ngFor="let book of books">
      </app-singletrade>
      </div>
  </div>
  `,
  styles: [`
    .title {
      font-size: 1.7em;
      margin-bottom: 15px;
    }
    #one {
      margin: 0px 54px 0px 54px;
    }
    `]
})

export class BrowseBooksComponent implements OnInit {
  constructor(private bookService: BookService) {}
  books: Book[];

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(
      (books: Book[]) => this.books = books
    )
  }
}
