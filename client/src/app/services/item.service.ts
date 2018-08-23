import { Injectable } from '@angular/core';
import { Item } from 'src/app/interfaces';
import { MessageService } from './message.service';
import { HttpService } from '../utils';

@Injectable()
export class ItemService {
  constructor(private http: HttpService, private _message: MessageService) {}

  getAll = () => this.http.get<Item[]>('items/');

  getById = id => this.http.get<Item[]>('items/' + id);

  add = (wish: Item) => this.http.post<Item>('items/', wish);

  edit = (wish: Item) => this.http.put<Item>('items/' + wish.id, wish);

  remove = (wish: Item) => this.http.delete('items/' + wish.id);
}
