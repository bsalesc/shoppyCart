import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Wish } from 'src/app/interfaces';
import { MessageService } from './message.service';

@Injectable()
export class WishService {
  private list: AngularFireList<Wish>;
  constructor(
    private _db: AngularFireDatabase,
    private _message: MessageService
  ) {
    this.list = this._db.list('/');
  }

  getAll = () => this.list.valueChanges();

  getById = id => this._db.list('/' + id).valueChanges();

  add = (wish: Wish) => {
    const ref = this.list.push(wish);
    ref.update({ id: ref.key });

    this._message.show(`${wish.description} added :)`);
  };

  edit = (wish: Wish) => {
    this.list.update(wish.id, wish);
    this._message.show(`${wish.description} edited :)`);
  };

  remove = (wish: Wish): void => {
    this.list.remove(wish.id);
    this._message.show(`${wish.description} removed :(`);
  };
}
