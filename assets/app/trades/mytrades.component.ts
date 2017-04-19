import { Component, OnInit } from '@angular/core';

import {BookService} from "../books/book.service";
import {TradeService} from "./trade.service";
import {Book} from "../books/book.model";

@Component({
  selector: 'app-mytrades',
  templateUrl: './mytrades.component.html'
})

export class MyTradesComponent implements OnInit {
  constructor(private tradeService: TradeService) {}
  sentRequests: Book[];
  receivedRequests: Book[];


  ngOnInit() {
    this.tradeService.getMyRequests()
      .subscribe((sentRequests: Book[]) => {
        this.sentRequests = sentRequests;
        console.log(this.sentRequests);
      })
    this.tradeService.getMyReceived()
    .subscribe((receivedRequests: Book[]) => {
      this.receivedRequests = receivedRequests;
      console.log(this.receivedRequests);
    })
  }



}
