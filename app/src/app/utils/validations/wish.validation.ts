import { FormGroup, FormControl } from './validation';
import { Validators } from '@angular/forms';

export const WishFormValidation = () =>
  new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    price: new FormControl('', [Validators.min(0)])
  });
