import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormGroup } from '../../../validations/login.validation';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup: LoginFormGroup;
  constructor(private userService: UserService, private router: Router) {
    this.formGroup = new LoginFormGroup();
  }

  ngOnInit() {}

  login = () => {
    const { email, pass } = this.formGroup;

    this.userService
      .login(email.value, pass.value)
      .subscribe(result => this.router.navigate(['']));
  };

  register = () => this.router.navigate(['register']);
}
