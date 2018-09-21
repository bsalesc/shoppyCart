import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private menuService: MenuService,
    private userService: UserService,
  ) {}

  ngOnInit() {}

  toggleMenu = () => this.menuService.toggle();

  get menuCls() {
    return !this.menuService.visible ? 'no-height' : '';
  }

  get userAuthenticated() {
    return this.userService.token;
  }
}
