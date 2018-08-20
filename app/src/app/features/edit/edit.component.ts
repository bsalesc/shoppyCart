import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private _service: WishService) {}

  ngOnInit() {}

  edit = () => this._service.edit(this.wish);
}
