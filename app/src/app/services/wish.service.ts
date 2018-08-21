import { Injectable } from '@angular/core';
import { Wish } from 'src/app/interfaces';
import { MessageService } from './message.service';
import { HttpService } from '../utils/http.service';

@Injectable()
export class WishService {
  constructor(private http: HttpService, private _message: MessageService) {}

  getAll = () => this.http.get<Result<Wish[]>>('items/');

  getById = id => this.http.get<Result<Wish[]>>('items/' + id);

  add = (wish: Wish) => this.http.post<Result<Wish>>('items/', wish);

  edit = (wish: Wish) => this.http.put<Result<Wish>>('items/' + wish.id, wish);

  remove = (wish: Wish) => this.http.delete<void>('items/' + wish.id);
}

interface Result<T> {
  data: T;
}
