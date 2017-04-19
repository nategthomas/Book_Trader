import { Component, OnInit } from '@angular/core';

import { BookService} from "./book.service";
import {Book} from "./book.model";

@Component({
  selector: 'app-browsebooks',
  template: `
  <div class="container">
    <app-singletrade
    class="book-results"
    [book]='book'
    *ngFor="let book of books">
    </app-singletrade>
  </div>
  `
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
