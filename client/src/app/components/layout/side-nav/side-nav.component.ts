import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  constructor(private menuService: MenuService, private _router: Router) {}

  ngOnInit() {}

  get visibleCls() {
    return this.menuService.visible ? 'visible' : '';
  }

  get menus() {
    return this.menuService.get();
  }

  isActivePage = url => url === this._router.url;

  handle = () => setTimeout(this.menuService.toggle, 300);
}
