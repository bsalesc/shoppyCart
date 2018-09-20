import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  constructor(public menuService: MenuService) {}

  ngOnInit() {}

  get visibleCls() {
    return this.menuService.visible ? 'visible' : '';
  }
}
