import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private userService: UserService) {}

  visible: boolean = false;

  toggle = () => (this.visible = !this.visible);

  get = (): Menu[] => [
    { description: 'List', url: '/', allowed: this.userService.token },
    {
      description: 'Categories',
      url: '/categories',
      allowed: this.userService.token,
    },
    { description: 'Markets', url: '/', allowed: this.userService.token },
    { description: 'About', url: '/about', allowed: true },
  ];
}
