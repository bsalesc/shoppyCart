import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  constructor(private menuService: MenuService) {}

  ngOnInit() {}

  get visibleCls() {
    return this.menuService.visible ? 'visible' : '';
  }

  get menus() {
    return this.menuService.get();
  }

  handle = () => setTimeout(this.menuService.toggle, 300);
}
