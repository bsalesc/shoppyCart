import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class HomeGuard implements CanActivate {
  constructor(private service: UserService, private router: Router) {}

  canActivate() {
    if (this.service.userAgreed) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
