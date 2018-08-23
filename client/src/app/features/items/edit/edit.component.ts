import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../interfaces';
import { ItemService } from '../../../services/item.service';
import { ItemFormGroup } from '../../../validations';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  @Input()
  item: Item;

  @Output()
  edit: EventEmitter<Item> = new EventEmitter<Item>();

  formGroup: ItemFormGroup;

  constructor(private itemService: ItemService) {
    this.formGroup = new ItemFormGroup();
  }

  ngOnInit() {}

  handleEdit = () => {
    this.itemService
      .edit(this.item)
      .subscribe(result => this.edit.emit(result.data));
  };
}
