import { Component, Input } from '@angular/core';

import {Book} from "./book.model";
import {BookService} from "./book.service";


@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})

export class SingleBook {
  @Input() book: Book;

  constructor(private bookService: BookService){}


  onClick() {
    this.bookService.clickedBook(this.book);
  }



}
