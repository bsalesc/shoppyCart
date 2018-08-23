import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AgreementGuard implements CanActivate {
  constructor(private service: UserService, private router: Router) {}

  canActivate() {
    if (!this.service.userAgreed) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}