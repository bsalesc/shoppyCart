import { Component, Output, EventEmitter } from '@angular/core';
import { CategoryFormGroup } from 'src/app/validations/category.validation';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent {
  @Output()
  add: EventEmitter<Category> = new EventEmitter<Category>();
  formGroup: CategoryFormGroup;

  constructor(private categoryService: CategoryService) {
    this.formGroup = new CategoryFormGroup();
  }

  handleAdd = () => {
    this.categoryService.add(this.formGroup.value).subscribe(category => {
      this.add.emit(category);
      this.formGroup.reset();
    });
  };
}
