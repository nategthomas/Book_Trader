import { RouterModule } from "@angular/router";
import { BookComponent } from "./books/book.component";
import { AuthComponent } from "./auth/auth.component";
import { AUTH_ROUTES } from "./auth/auth.routing";
import { MyBooksComponent } from "./books/mybooks.component";
import { BrowseBooksComponent } from "./books/browsebooks.component";
import { MyTradesComponent } from "./trades/mytrades.component";
import { AddressComponent } from "./auth/address.component";
var APP_ROUTES = [
    { path: '', redirectTo: '/book', pathMatch: 'full' },
    { path: 'browsebooks', component: BrowseBooksComponent },
    { path: 'book', component: BookComponent },
    { path: 'mybooks', component: MyBooksComponent },
    { path: 'mytrades', component: MyTradesComponent },
    { path: 'auth', component: AuthComponent, children: AUTH_ROUTES },
    { path: 'address', component: AddressComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map