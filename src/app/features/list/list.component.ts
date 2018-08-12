import { Component, OnInit } from '@angular/core';
import { WishService } from 'src/app/services/wish.service';
import { Wish, TypeMessage } from 'src/app/interfaces';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private _shoppingList: Wish[] = [];
  private _expanded: string[] = [];

  constructor(private _service: WishService, private _user: UserService) {}

  get list(): Wish[] {
    return this._shoppingList.filter(f => this.showBoughtItems || !f.bought);
  }

  get totalRecords(): number {
    return this._shoppingList.length;
  }

  get showBoughtItems() {
    return this._user.showBoughtItems;
  }

  set showBoughtItems(show: boolean) {
    this._user.showBoughtItems = show;
    this.loadList();
  }

  get userAgreed() {
    return this._user.userAgreed;
  }

  ngOnInit() {
    this.loadList();
  }

  isExpanded = id => !!this._expanded.find(f => f === id);

  toggle = id => {
    if (this.isExpanded(id)) {
      this._expanded.splice(this._expanded.indexOf(id), 1);
    } else {
      this._expanded.push(id);
    }
  };

  loadList = () =>
    this._service.getAll().subscribe(list => (this._shoppingList = list));

  mark = (wish: Wish) => {
    wish.bought = !wish.bought;
    setTimeout(this._service.edit, 500, wish);
  };

  removeWish = wish => this._service.remove(wish);

  editWish = wish => {};
}
