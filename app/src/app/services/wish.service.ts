import { Injectable } from '@angular/core';
import { Wish } from 'src/app/interfaces';
import { MessageService } from './message.service';
import { HttpService } from '../utils/http.service';

@Injectable()
export class WishService {
  constructor(private http: HttpService, private _message: MessageService) {}

  getAll = () => this.http.get<Wish[]>('items/');

  getById = id => this.http.get<Wish[]>('items/' + id);

  add = (wish: Wish) => this.http.post<Wish>('items/', wish);

  edit = (wish: Wish) => this.http.put<Wish>('items/' + wish.id, wish);

  remove = (wish: Wish) => this.http.delete('items/' + wish.id);
}
