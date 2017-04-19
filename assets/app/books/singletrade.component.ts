import { Component, Input } from '@angular/core';

import {Book} from "./book.model";
import {BookService} from "./book.service";
import {TradeService} from "../trades/trade.service";

@Component({
  selector: 'app-singletrade',
  templateUrl: './singletrade.component.html',
  styleUrls: ['./singletrade.component.css']
})

export class SingleTrade {
  @Input() book: Book;

  constructor(private bookService: BookService, private tradeService: TradeService){}

  onSend() {
    this.tradeService.sendRequest(this.book).subscribe(
      (book: Book) => console.log(book)
    )
  }

  onRequest(element, text){
    element.textContent = text;
    element.disabled = true;
  }

}
