import { Component, Output, EventEmitter } from '@angular/core';
import { Wish } from 'src/app/interfaces';
import { WishService } from '../../services/wish.service';
import { ItemFormValidation, ItemFormGroup } from '../../validations';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  @Output()
  add: EventEmitter<Wish> = new EventEmitter<Wish>();

  wish: Wish = {
    id: '',
    description: '',
    price: null,
    quantity: null,
    bought: false
  };

  formGroup: ItemFormGroup;

  constructor(private _service: WishService) {
    this.formGroup = ItemFormValidation();
  }
  handleAdd = () => {
    Object.assign(this.wish, this.formGroup.value);
    this._service.add(this.wish).subscribe(result => {
      this.add.emit(result.data);
      this.wish = {
        id: '',
        description: '',
        price: 0,
        quantity: 0,
        bought: false
      };
    });
  };
}
