import { Component, Input, OnInit } from '@angular/core';

import {Book} from "../books/book.model";
import {TradeService} from "./trade.service";


@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
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

export class Received implements OnInit {
  @Input() book: Book;

  constructor(private tradeService: TradeService){}

  ngOnInit() {
    console.log(this.book);
  }

  onReject() {
    this.tradeService.rejectRequest(this.book).subscribe(
      data => console.log(data)
    )
  }

  onAccept() {
    this.tradeService.acceptRequest(this.book).subscribe(
      data => console.log(data)
    )
  }

}
