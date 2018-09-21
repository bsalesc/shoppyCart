import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule as Module, Route } from '@angular/router';
import { ListComponent } from '../features/items/list/list.component';
import { ListModule } from '../features/items/list/list.module';
import { LoginComponent } from '../features/users/login/login.component';
import { LoginModule } from '../features/users/login/login.module';
import { RegisterComponent } from '../features/users/register/register.component';
import { RegisterModule } from '../features/users/register/register.module';
import { AuthGuard } from '../guards/auth.service';
import { LogoutComponent } from 'src/app/features/users/login/logout.component';

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: ListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    CommonModule,
    ListModule,
    LoginModule,
    RegisterModule,
    Module.forRoot(routes),
  ],
  declarations: [],
  exports: [Module],
})
export class RouterModule {}
