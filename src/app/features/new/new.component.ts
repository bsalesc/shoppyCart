import { Component } from '@angular/core';
import { Wish } from 'src/app/interfaces';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  wish: Wish = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0
  };

  constructor(private listComponent: ListComponent) {}

  add = () => this.listComponent.addWish(this.wish);
}
