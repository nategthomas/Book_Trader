import { Component, Input } from '@angular/core';

import {Book} from "../books/book.model";
import {BookService} from "../books/book.service";
import {TradeService} from "./trade.service";


@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styles: [
    `.container {
    background: white;
    font-size: 1.3em;
    width: 500px;
    margin: 0 auto;
    margin-bottom: 25px;
    padding: 20px;
    text-align: left;
    position: relative;
    border: solid 2px grey;
    border-radius: 5px;
  }`
]
})

export class Sent {
  @Input() book: Book;

  constructor(private tradeService: TradeService){}

  onCancel() {
    this.tradeService.deleteRequest(this.book).subscribe(
      data => console.log(data)
    );
  }


}
