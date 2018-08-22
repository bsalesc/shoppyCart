import { FormGroup, FormControl } from './shared/validation';
import { Validators, AbstractControl } from '@angular/forms';

export interface ItemFormGroup extends FormGroup {
  description: FormControl;
  quantity: FormControl;
  price: FormControl;
}

export const ItemFormValidation = (): ItemFormGroup => {
  const formGroup = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    price: new FormControl('', [Validators.min(0)])
  });

  const itemFormGroup: ItemFormGroup = Object.assign(formGroup, {
    description: formGroup.getFormControl('description'),
    quantity: formGroup.getFormControl('quantity'),
    price: formGroup.getFormControl('price')
  });

  return itemFormGroup;
};
