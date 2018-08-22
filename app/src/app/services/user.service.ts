import { Injectable } from '@angular/core';
import { UserStorage } from '../interfaces';

@Injectable({
  providedIn: 'root',
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

  set showBoughtItems(show: boolean) {
    if (show === this.user.showBoughtItems) {
      return;
    }
    this.user.showBoughtItems = show;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  get showBoughtItems(): boolean {
    return this.user.showBoughtItems;
  }

  loadUser = (): UserStorage => {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (!this.user) {
      localStorage.setItem(
        'user',
        JSON.stringify(
          (this.user = {
            agreed: false,
            showBoughtItems: false,
          }),
        ),
      );
    }
    return this.user;
  };
}
