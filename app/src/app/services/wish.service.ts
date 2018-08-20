import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Wish } from 'src/app/interfaces';
import { MessageService } from './message.service';
import { HttpService } from '../utils/http.service';

@Injectable()
export class WishService {
  private list: AngularFireList<Wish>;
  constructor(
    private http: HttpService,
    private _db: AngularFireDatabase,
    private _message: MessageService
  ) {
    this.list = this._db.list('/');
  }

  getAll = () => this.http.get<Result<Wish[]>>('items/');

  getById = id => this.http.get<Result<Wish[]>>('items/' + id);

  add = (wish: Wish) => this.http.post<Result<Wish>>('items/', wish);

  edit = (wish: Wish) => this.http.put<Result<Wish>>('items/' + wish.id, wish);

  remove = (wish: Wish) => this.http.delete<void>('items/' + wish.id);
}

interface Result<T> {
  data: T;
}
