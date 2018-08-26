import { Component, OnInit } from '@angular/core';
import { RegisterFormGroup } from '../../../validations/register.validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formGroup: RegisterFormGroup;

  constructor(private router: Router) {
    this.formGroup = new RegisterFormGroup();
  }

  login = () => this.router.navigate(['login']);

  ngOnInit() {}
}
