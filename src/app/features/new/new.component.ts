import { Component } from '@angular/core';
import { Wish } from 'src/app/interfaces';
import { ListComponent } from '../list/list.component';
import { WishService } from '../../services/wish.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  wish: Wish = {
    id: '',
    name: '',
    price: 0,
    quantity: 0
  };

  constructor(private _service: WishService) {}

  add = () => {
    this._service.add(this.wish);
    this.wish = {
      id: '',
      name: '',
      price: 0,
      quantity: 0
    };
  };
}
