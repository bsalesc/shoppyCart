import { Component, OnInit } from '@angular/core';
import { Wish } from '../../interfaces';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  shoppingList: Wish[] = [];

  constructor() {}

  ngOnInit() {}
}
