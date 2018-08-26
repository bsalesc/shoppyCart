import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule as Module, Route } from '@angular/router';
import { ListComponent } from '../features/items/list/list.component';
import { ListModule } from '../features/items/list/list.module';
import { HomeComponent } from '../features/home/home.component';
import { AgreementGuard } from '../guards/agreement.guard';
import { HomeModule } from '../features/home/home.module';
import { HomeGuard } from '../guards/home.guard';
import { LoginComponent } from '../features/users/login/login.component';
import { LoginModule } from '../features/users/login/login.module';
import { RegisterComponent } from '../features/users/register/register.component';
import { RegisterModule } from '../features/users/register/register.module';
import { AuthGuard } from '../guards/auth.service';

const routes: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [HomeGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: ListComponent,
    pathMatch: 'full',
    canActivate: [AgreementGuard, AuthGuard],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    CommonModule,
    ListModule,
    LoginModule,
    RegisterModule,
    HomeModule,
    Module.forRoot(routes),
  ],
  declarations: [],
  exports: [Module],
})
export class RouterModule {}
