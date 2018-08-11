import { Component, OnInit } from '@angular/core';
import { WishService } from 'src/app/services/wish.service';
import { Wish, TypeMessage } from 'src/app/interfaces';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private _shoppingList: Wish[] = [];
  private _showInactiveItem: boolean = false;

  constructor(private _service: WishService) {}

  set showInactiveItem(value: boolean) {
    if (this._showInactiveItem === value) {
      return;
    }
    this._showInactiveItem = value;
    this.loadList();
  }

  get showInactiveItem() {
    return this._showInactiveItem;
  }

  get list(): Wish[] {
    return this._shoppingList.filter(f => this.showInactiveItem || !f.bought);
  }

  get totalRecords(): number {
    return this._shoppingList.length;
  }

  ngOnInit() {
    this.loadList();
  }

  loadList = () =>
    this._service.getAll().subscribe(list => (this._shoppingList = list));

  mark = (wish: Wish) => {
    wish.bought = !wish.bought;
    setTimeout(this._service.edit, 500, wish);
  };

  removeWish = wish => this._service.remove(wish);
}
