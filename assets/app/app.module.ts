import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import {AuthComponent} from "./auth/auth.component";
import {HeaderComponent} from "./header.component";
import {BookComponent} from "./books/book.component"
import {routing} from "./app.routing";
import {SignupComponent} from "./auth/signup.component";
import {SigninComponent} from "./auth/signin.component";
import {LogoutComponent} from "./auth/logout.component";
import {AuthService} from "./auth/auth.service";
import {BookService} from "./books/book.service";
import {TradeService} from "./trades/trade.service";
import {SingleBook} from "./books/singlebook.component";
import {MyBooksComponent} from "./books/mybooks.component";
import {BrowseBooksComponent} from "./books/browsebooks.component";
import {SingleTrade}  from "./books/singletrade.component";
import {MyTradesComponent} from "./trades/mytrades.component";
import {Sent} from "./trades/sent.component";
import {Received} from "./trades/received.component";


@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        HeaderComponent,
        BookComponent,
        SignupComponent,
        SigninComponent,
        LogoutComponent,
        SingleBook,
        MyBooksComponent,
        BrowseBooksComponent,
        SingleTrade,
        MyTradesComponent,
        Sent,
        Received
    ],
    imports: [
      BrowserModule,
      routing,
      FormsModule,
      ReactiveFormsModule,
      HttpModule
    ],
    providers: [AuthService, BookService, TradeService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
