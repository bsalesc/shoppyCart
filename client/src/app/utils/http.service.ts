import { Injectable } from '@angular/core';
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
  private API_URL: string;

  constructor(private service: HttpClient, private message: MessageService) {
    this.API_URL = environment.api_url;
  }

  catchError = observable =>
    observable.pipe(
      map(result => result),
      catchError(result => {
        this.message.show(result.error.error, TypeMessage.WARNING);
        return throwError(result.error.error);
      }),
    );

  get = <T>(url: string, options?: Options) =>
    this.catchError(this.service.get<Result<T>>(this.API_URL + url, options));

  post = <T>(url: string, body: any, options?: Options) =>
    this.catchError(
      this.service.post<Result<T>>(this.API_URL + url, body, options),
    );

  put = <T>(url: string, body: any, options?: Options) =>
    this.catchError(
      this.service.put<Result<T>>(this.API_URL + url, body, options),
    );

  delete = <T>(url: string, options?: Options) =>
    this.catchError(
      this.service.delete<Result<T> & any>(this.API_URL + url, options),
    );

  patch = <T>(url: string, body: any, options?: Options) =>
    this.catchError(
      this.service.patch<Result<T> & any>(this.API_URL + url, body, options),
    );
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
