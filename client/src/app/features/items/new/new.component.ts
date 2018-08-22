import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/interfaces';
import { ItemService } from '../../../services/item.service';
import { ItemFormGroup } from '../../../validations';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent {
  @Output()
  add: EventEmitter<Item> = new EventEmitter<Item>();

  item: Item = {
    id: '',
    description: '',
    price: null,
    quantity: null,
    bought: false,
  };

  formGroup: ItemFormGroup;

  constructor(private itemService: ItemService) {
    this.formGroup = new ItemFormGroup();
  }
  handleAdd = () => {
    Object.assign(this.item, this.formGroup.value);
    this.itemService.add(this.item).subscribe(result => {
      this.add.emit(result.data);
      this.item = {
        id: '',
        description: '',
        price: 0,
        quantity: 0,
        bought: false,
      };
    });
  };
}
