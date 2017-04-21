import {Injectable, EventEmitter} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Observable} from "rxjs";
import 'rxjs/add/observable/throw';

import {Book} from "./book.model";

@Injectable()
export class BookService {
private books: Book[] = [];
  constructor(private http: Http) {}
  bookisClicked = new EventEmitter<Book>();

  clickedBook(book: Book) {
    this.bookisClicked.emit(book);
  }

  onRemove(book: Book) {
    this.books.splice(this.books.indexOf(book), 1);
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : '';
    return this.http.delete('https://bookstrade.herokuapp.com/books/' + book.bookId + token)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getAllBooks() {
    return this.http.get('https://bookstrade.herokuapp.com/books')
      .map((response: Response) => {
        const books = response.json().obj;
        let browseBooks: Book[] = [];
        for (let book of books) {
          browseBooks.push(new Book(book.title,
                                book.author,
                                book.image,
                                book.description,
                                undefined,
                                undefined,
                                book._id,
                                book.user._id,
                                book.user.firstName))
        }
        console.log(browseBooks);
        return browseBooks;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getMyBooks() {
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : '';
    return this.http.get('https://bookstrade.herokuapp.com/books/mybooks' + token)
      .map((response: Response) => {
        const books = response.json().obj;
        let transformedBooks: Book[] = [];
        for (let book of books) {
          transformedBooks.push(new Book(book.title,
                                book.author,
                                book.image,
                                book.description,
                                undefined,
                                undefined,
                                book._id,
                                book.user._id))
        }
        console.log(transformedBooks);
        this.books = transformedBooks;
        return transformedBooks;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }


  addBook(book: Book) {
    const body = JSON.stringify(book);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : '';
    return this.http.post('https://bookstrade.herokuapp.com/books' + token, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }


  getBooks(search) {

    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + search)
      .map((response: Response) => {
        const books = response.json().items;
        console.log(books);
        let transBook: Book[] = [];
        for (let book of books) {
          const author = book.volumeInfo.authors
          ? book.volumeInfo.authors[0]
          : undefined;
          const thumbnail = book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.thumbnail
          : 'NoImageAvailable.png'
          const description = book.volumeInfo.description
          ? book.volumeInfo.description
          : "No Description provided";
          transBook.push(new Book(book.volumeInfo.title,
                                  author,
                                  thumbnail,
                                  description,
                                  undefined,
                                  undefined))
        }
        console.log(transBook);
        return transBook;
      })
  }


}
