import { Injectable } from '@angular/core';
import { UserStorage } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserStorage;

  constructor() {
    this.loadUser();
  }

  set userAgreed(agreed: boolean) {
    if (agreed === this.user.agreed) {
      return;
    }
    this.user.agreed = agreed;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  get userAgreed(): boolean {
    return this.user.agreed;
  }

  loadUser = (): UserStorage =>
    (this.user = JSON.parse(localStorage.getItem('user')) || {
      agreed: false
    });
}
