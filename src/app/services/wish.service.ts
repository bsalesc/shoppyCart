import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Wish } from 'src/app/interfaces';

@Injectable()
export class WishService {
  private list: AngularFireList<Wish>;
  constructor(private _db: AngularFireDatabase) {
    this.list = this._db.list('/');
  }

  getAll = () => this.list.valueChanges();

  add = wish => {
    const ref = this.list.push(wish);
    ref.update({ id: ref.key });
  };

  remove = wish => this.list.remove(wish.id);
}
