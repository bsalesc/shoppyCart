import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  private _expanded: string[] = [];

  public list = [
    {
      id: 'test',
      description: 'test',
    },
  ];

  constructor() {}

  ngOnInit() {}

  isExpanded = id => !!this._expanded.find(f => f === id);

  toggle = id =>
    this.isExpanded(id)
      ? this._expanded.splice(this._expanded.indexOf(id), 1)
      : this._expanded.push(id);
}
