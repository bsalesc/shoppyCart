import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule as Module, Route } from '@angular/router';
import { ListComponent } from '../features/items/list/list.component';
import { ListModule } from '../features/items/list/list.module';
import { CategoriesModule } from '../features/categories/categories.module';
import { CategoriesComponent } from '../features/categories/categories.component';
import { HomeComponent } from '../features/home/home.component';
import { AgreementGuard } from '../guards/agreement.guard';
import { HomeModule } from '../features/home/home.module';
import { HomeGuard } from '../guards/home.guard';

const routes: Route[] = [
  { path: 'categories', component: CategoriesComponent },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [HomeGuard],
  },
  {
    path: '',
    component: ListComponent,
    pathMatch: 'full',
    canActivate: [AgreementGuard],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    CommonModule,
    ListModule,
    CategoriesModule,
    HomeModule,
    Module.forRoot(routes),
  ],
  declarations: [],
  exports: [Module],
})
export class RouterModule {}
