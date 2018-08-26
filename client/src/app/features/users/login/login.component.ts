import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFormGroup } from '../../../validations/user.validation';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup: UserFormGroup;
  constructor(private userService: UserService, private router: Router) {
    this.formGroup = new UserFormGroup();
  }

  ngOnInit() {}

  login = () => {
    const { email, pass } = this.formGroup;

    this.userService
      .login(email.value, pass.value)
      .subscribe(result => this.router.navigate(['']));
  };
}
