import { Component, OnInit } from '@angular/core';
import { WishService } from 'src/app/services/wish.service';
import { Wish } from 'src/app/interfaces';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  shoppingList: Wish[] = [];

  wish: Wish = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0
  };

  constructor(private _service: WishService) {}

  ngOnInit() {
    this._service.getAll().subscribe(list => (this.shoppingList = list));
  }

  addWish = () => this._service.add(this.wish);

  removeWish = wish => this._service.remove(wish);
}
