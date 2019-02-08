import { FormGroup, FormControl } from './shared/validation';
import { Validators } from '@angular/forms';

export class CategoryFormGroup extends FormGroup {
  description: FormControl;

  constructor() {
    super({
      description: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });

    this.description = this.getFormControl('description');
  }
}
