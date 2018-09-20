import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor() {}

  visible: boolean = false;

  toggle = () => (this.visible = !this.visible);
}
