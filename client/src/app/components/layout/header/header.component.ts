import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public menuService: MenuService) {}

  ngOnInit() {}

  toggleMenu = () => this.menuService.toggle();
}
