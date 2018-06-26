import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CategoriesComponent
  ],
  exports: [CategoriesComponent],
  bootstrap: [CategoriesComponent]
})
export class CategoriesModule { }
