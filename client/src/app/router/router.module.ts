import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule as Module, Route } from '@angular/router';

import { ListComponent as ItemListComponent } from '../features/items/list/list.component';
import { ListComponent as CategoryListComponent } from '../features/categories/list/list.component';

import { ListModule as ItemListModule } from '../features/items/list/list.module';
import { ListModule as CategoryListModule } from '../features/categories/list/list.module';

import { LoginComponent } from '../features/users/login/login.component';
import { LoginModule } from '../features/users/login/login.module';
import { RegisterComponent } from '../features/users/register/register.component';
import { RegisterModule } from '../features/users/register/register.module';
import { AuthGuard } from '../guards/auth.service';
import { LogoutComponent } from 'src/app/features/users/login/logout.component';
import { AboutComponent } from '../features/about/about.component';
import { AboutModule } from '../features/about/about.module';

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: ItemListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: 'categories', component: CategoryListComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    CommonModule,
    ItemListModule,
    CategoryListModule,
    AboutModule,
    LoginModule,
    RegisterModule,
    Module.forRoot(routes),
  ],
  declarations: [],
  exports: [Module],
})
export class RouterModule {}
