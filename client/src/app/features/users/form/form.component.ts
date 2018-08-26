import { Component, OnInit, Input, Output } from '@angular/core';
import { LoginFormGroup } from '../../../validations/login.validation';
import { RegisterFormGroup } from '../../../validations/register.validation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input()
  loginView: boolean;

  @Input()
  formGroup: LoginFormGroup | RegisterFormGroup;

  constructor() {}

  ngOnInit() {}
}
