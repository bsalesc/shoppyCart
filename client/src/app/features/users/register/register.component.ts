import { Component, OnInit } from '@angular/core';
import { RegisterFormGroup } from '../../../validations/register.validation';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formGroup: RegisterFormGroup;

  constructor(private router: Router, private userService: UserService) {
    this.formGroup = new RegisterFormGroup();
  }

  login = () => this.router.navigate(['login']);

  register = () => {
    const user: User = this.formGroup.value;
    this.userService
      .register(user)
      .subscribe(result => this.router.navigate(['']));
  };

  ngOnInit() {}
}
