import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule as Module, Route } from '@angular/router';
import { ListComponent } from '../features/list/list.component';
import { ListModule } from '../features/list/list.module';
import { CategoriesModule } from '../features/categories/categories.module';
import { CategoriesComponent } from '../features/categories/categories.component';

const routes: Route[] = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/list' }
];

@NgModule({
  imports: [CommonModule, ListModule, CategoriesModule, Module.forRoot(routes)],
  declarations: [],
  exports: [Module]
})
export class RouterModule {}
