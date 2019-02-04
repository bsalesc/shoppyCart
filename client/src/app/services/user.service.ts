import { Injectable } from '@angular/core';
import { UserStorage, User } from '../interfaces';
import { HttpService } from '../utils';
import { MessageService } from './message.service';
import { map } from 'rxjs/operators';
import { Result } from '../utils/http.service';
import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  userStorage: UserStorage;

  constructor(private http: HttpService, private _message: MessageService) {
    this.loadUser();
  }

  login = (email: string, pass: string) =>
    this.http
      .get<User>('users/login', {
        params: new HttpParams().set('email', email).set('pass', pass),
      })
      .pipe(
        map<User, User>(user => {
          this.setUser({ ...this.userStorage, user });
          return user;
        }),
      );

  logout = () =>
    this.http.get<User>('users/logout').pipe(
      map<User, User>(user => {
        this.setUser({ ...this.userStorage, user: null });
        return user;
      }),
    );

  register = (newUser: User) =>
    this.http.post<User>('users/register', newUser).pipe(
      map<User, User>(user => {
        this.setUser({ ...this.userStorage, user });
        return user;
      }),
    );

  set userAgreed(agreed: boolean) {
    if (agreed === this.userStorage.agreed) return;

    this.userStorage.agreed = agreed;
    localStorage.setItem('user', JSON.stringify(this.userStorage));
  }

  get userAgreed(): boolean {
    return this.userStorage.agreed;
  }

  set showBoughtItems(show: boolean) {
    if (show === this.userStorage.showBoughtItems) return;

    this.userStorage.showBoughtItems = show;
    localStorage.setItem('user', JSON.stringify(this.userStorage));
  }

  get showBoughtItems(): boolean {
    return this.userStorage.showBoughtItems;
  }

  get token() {
    return this.userStorage.user && !!this.userStorage.user.token;
  }

  setUser = (userStorage: UserStorage) =>
    localStorage.setItem('user', JSON.stringify((this.userStorage = { ...this.userStorage, ...userStorage })));

  loadUser = (): UserStorage => {
    this.userStorage = JSON.parse(localStorage.getItem('user'));
    if (!this.userStorage) {
      localStorage.setItem(
        'user',
        JSON.stringify(
          (this.userStorage = {
            agreed: false,
            showBoughtItems: false,
          }),
        ),
      );
    }
    return this.userStorage;
  };
}
