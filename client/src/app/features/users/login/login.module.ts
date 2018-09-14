import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { FormModule } from '../form/form.module';
import { LogoutComponent } from './logout.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormModule],
  declarations: [LoginComponent, LogoutComponent],
  providers: [UserService],
  exports: [LoginComponent, LogoutComponent],
})
export class LoginModule {}
