import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Wish } from '../../interfaces';
import { WishService } from '../../services/wish.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input()
  wish: Wish;

  @Output()
  edit: EventEmitter<Wish> = new EventEmitter<Wish>();

  constructor(private _service: WishService) {}

  ngOnInit() {}

  handleEdit = () => {
    this._service
      .edit(this.wish)
      .subscribe(result => this.edit.emit(result.data));
  };
}
