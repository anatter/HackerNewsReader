import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { News } from './news';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class GetnewsService {

  newsUrl = "https://node-hnapi.herokuapp.com/news";
  //newsUrl = "assets/test_news.json"
  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
      return this.http.get<News[]>(this.newsUrl)
        .pipe(
          retry(3), // retry a failed request up to 3 times
          catchError(this.handleError)
        )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
}
