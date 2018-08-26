import { FormGroup, FormControl } from './shared/validation';
import { Validators } from '@angular/forms';

export class UserFormGroup extends FormGroup {
  email: FormControl;
  pass: FormControl;

  constructor() {
    super({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });

    this.email = this.getFormControl('email');
    this.pass = this.getFormControl('pass');
  }
}
