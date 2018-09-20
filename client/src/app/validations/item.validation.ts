import { FormGroup, FormControl } from './shared/validation';
import { Validators } from '@angular/forms';

export class ItemFormGroup extends FormGroup {
  description: FormControl;
  quantity: FormControl;
  price: FormControl;

  constructor() {
    super({
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      quantity: new FormControl('', [Validators.required, Validators.min(1)]),
      price: new FormControl('', [Validators.min(0)]),
    });

    this.description = this.getFormControl('description');
    this.quantity = this.getFormControl('quantity');
    this.price = this.getFormControl('price');
  }
}
