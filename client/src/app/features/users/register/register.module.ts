import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../form/form.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormModule],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
})
export class RegisterModule {}
