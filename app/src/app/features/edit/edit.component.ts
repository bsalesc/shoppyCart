import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Wish } from '../../interfaces';
import { WishService } from '../../services/wish.service';
import { ItemFormValidation, ItemFormGroup } from '../../validations';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  @Input()
  wish: Wish;

  @Output()
  edit: EventEmitter<Wish> = new EventEmitter<Wish>();

  formGroup: ItemFormGroup;

  constructor(private _service: WishService) {
    this.formGroup = ItemFormValidation();
  }

  ngOnInit() {}

  handleEdit = () => {
    this._service
      .edit(this.wish)
      .subscribe(result => this.edit.emit(result.data));
  };
}
