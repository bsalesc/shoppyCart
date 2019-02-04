import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  private _expanded: string[] = [];

  public categories$ = this.categoryService.getAll();

  constructor(private categoryService: CategoryService) {}

  isExpanded = id => !!this._expanded.find(f => f === id);

  toggle = id => (this.isExpanded(id) ? this._expanded.splice(this._expanded.indexOf(id), 1) : this._expanded.push(id));

  // remove = category => this.categoryService.remove(category).subscribe(success => );

  // handleAdd = category => {
  //   debugger;
  // };
}
