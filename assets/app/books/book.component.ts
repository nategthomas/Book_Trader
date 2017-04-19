import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {BookService} from "./book.service";
import {SingleBook} from "./singlebook.component";
import {Book} from "./book.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: [`
    #label {
      font-size: 1.4em;
    }
  `]
})

export class BookComponent implements OnInit {
  constructor(private bookService: BookService, private router: Router) {}
  books: Book[];
  myForm: FormGroup;
  display = "none";
  book: Book;


  onSubmit() {
    this.bookService.getBooks(this.myForm.value.search)
    .subscribe(
      (books: Book[]) => {
      this.books = books;
    });
  }

  onClick() {
    this.display = "block";
  }

  ngOnInit() {
    this.myForm = new FormGroup({
          search: new FormControl(null, Validators.required),
      });
      this.bookService.bookisClicked.subscribe(
      (book: Book) => this.book = book
    )
  }

  addABook() {
    console.log(this.book);
    this.bookService.addBook(this.book)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );

    this.router.navigateByUrl('/mybooks');
  }

  closeWindow() {
    this.display = 'none';
  }


}
