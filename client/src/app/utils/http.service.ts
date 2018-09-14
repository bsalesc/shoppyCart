import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { MessageService } from '../services/message.service';
import { TypeMessage } from '../interfaces';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  @Output()
  redirectToLogin: EventEmitter<void> = new EventEmitter();

  private API_URL: string;

  constructor(private service: HttpClient, private message: MessageService) {
    this.API_URL = environment.api_url;
  }

  catchError = observable =>
    observable.pipe(
      map(result => result),
      catchError(result => {
        if (result.status === 401 && result.error === 'Invalid token.') {
          this.redirectToLogin.emit();
        } else {
          this.message.show(result.error, TypeMessage.WARNING);
        }
        return throwError(result.error);
      }),
    );

  mergeOptions = (options?: Options): Options => ({
    headers: new HttpHeaders().set('Authorization', this.token),
    ...options,
  });

  get = <T>(url: string, options?: Options) =>
    this.catchError(
      this.service.get<Result<T>>(
        this.API_URL + url,
        this.mergeOptions(options),
      ),
    );

  post = <T>(url: string, body: any, options?: Options) =>
    this.catchError(
      this.service.post<Result<T>>(
        this.API_URL + url,
        body,
        this.mergeOptions(options),
      ),
    );

  put = <T>(url: string, body: any, options?: Options) =>
    this.catchError(
      this.service.put<Result<T>>(
        this.API_URL + url,
        body,
        this.mergeOptions(options),
      ),
    );

  delete = <T>(url: string, options?: Options) =>
    this.catchError(
      this.service.delete<Result<T> & any>(
        this.API_URL + url,
        this.mergeOptions(options),
      ),
    );

  patch = <T>(url: string, body: any, options?: Options) =>
    this.catchError(
      this.service.patch<Result<T> & any>(
        this.API_URL + url,
        body,
        this.mergeOptions(options),
      ),
    );

  get token() {
    let token = '';
    const storage = JSON.parse(localStorage.getItem('user'));
    if (storage && storage.user) {
      token = storage.user.token;
    }

    return token;
  }
}

interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

export interface Result<T> {
  data: T;
}
