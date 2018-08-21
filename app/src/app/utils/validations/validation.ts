import {
  FormGroup as FormGroupOriginal,
  AbstractControl,
  ValidatorFn,
  AsyncValidatorFn,
  AbstractControlOptions,
  FormControl as FormControlOriginal
} from '@angular/forms';
import { ERRORS } from './errors';
import { formatError } from '../string-format';

export class FormGroup extends FormGroupOriginal {
  controls: {
    [key: string]: FormControl;
  };

  constructor(
    controls: {
      [key: string]: FormControl;
    },
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(controls, validatorOrOpts, asyncValidator);
    Object.keys(this.controls).forEach(key => {
      this.controls[key].key = key;
      this[key] = this.controls[key];
    });
  }

  get errorsMessage() {
    return Object.values(this.controls)
      .filter(f => f.getErrorMessages().length !== 0)
      .map(m => m.getErrorMessages());
  }
}

export class FormControl extends FormControlOriginal {
  key: string;

  constructor(
    formState?: any,
    validatorOrOpts?:
      | ValidatorFn
      | ValidatorFn[]
      | AbstractControlOptions
      | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  ) {
    super(formState, validatorOrOpts, asyncValidator);
  }

  get isValid() {
    return !this.errors || (!this.dirty && !this.touched);
  }

  getErrorMessages = (): string[] =>
    !!this.errors && (this.touched || this.dirty)
      ? Object.keys(this.errors).map(key =>
          formatError(ERRORS[key], this.key, this.errors[key])
        )
      : [];
}
