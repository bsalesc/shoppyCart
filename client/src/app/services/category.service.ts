import { Injectable } from '@angular/core';
import { HttpService } from '../utils';
import { Category } from '../interfaces/category';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private http: HttpService) {}

  getAll = () => this.http.get<Category[]>('categories/');

  getById = id => this.http.get<Category[]>('categories/' + id);

  add = (category: Category) => this.http.post<Category>('categories/', category);

  edit = (category: Category) => this.http.put<Category>('categories/' + category.id, category);

  remove = (category: Category) => this.http.delete('categories/' + category.id);
}
