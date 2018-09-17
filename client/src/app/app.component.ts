import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './utils';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  constructor(
    private httpService: HttpService,
    private userService: UserService,
    private router: Router,
  ) {
    this.httpService.redirectToLogin.subscribe(() => {
      this.userService.setUser({ ...this.userService.userStorage, user: null });
      this.router.navigate(['login']);
    });
  }
}
