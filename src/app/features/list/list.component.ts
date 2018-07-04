import { Component, OnInit } from '@angular/core';
import { WishService } from 'src/app/services/wish.service';
import { Wish, TypeMessage } from 'src/app/interfaces';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  shoppingList: Wish[] = [];

  message: string = 'Success';
  typeMessage: TypeMessage = TypeMessage.SUCCESS;

  constructor(private _service: WishService) {}

  ngOnInit() {
    this._service.getAll().subscribe(list => (this.shoppingList = list));
  }

  addWish = wish => {
    this._service.add(wish);
  };

  removeWish = wish => this._service.remove(wish);
}
