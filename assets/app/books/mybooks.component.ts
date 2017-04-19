import { Component, OnInit } from '@angular/core';

import {BookService} from "./book.service";
import {Book} from "./book.model";

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./singlebook.component.css']
})

export class MyBooksComponent implements OnInit {
  constructor(private bookService: BookService) {}
  books: Book[];
  display = 'none';
  book: Book;

  ngOnInit() {
    this.bookService.getMyBooks()
      .subscribe((books: Book[]) => {
        this.books = books;
      })
    this.bookService.bookisClicked.subscribe(
      (book: Book) => this.book = book
    )
  }

  onRemove() {
    this.bookService.onRemove(this.book).subscribe(
      (book) => console.log(book)
    )
  }

  onClick() {
    this.display = "block";
  }

  closeWindow() {
    this.display = 'none';
  }

}
