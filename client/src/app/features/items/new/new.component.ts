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

  formGroup: ItemFormGroup;

  constructor(private itemService: ItemService) {
    this.formGroup = new ItemFormGroup();
  }

  handleAdd = () => {
    this.itemService.add(this.formGroup.value).subscribe(item => {
      this.add.emit(item);
      this.formGroup.reset();
    });
  };
}
