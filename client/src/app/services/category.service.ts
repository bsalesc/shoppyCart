import { Injectable } from '@angular/core';
import { HttpService } from '../utils';
import { Subject } from 'rxjs';
import { observableIterator } from '../utils/obsersable';
import { Category } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private _categories$: Subject<Category[]>;
  private observableIterator = observableIterator<Category>();

  constructor(private http: HttpService) {
    this._categories$ = this.observableIterator.observable;
  }

  get categories() {
    this.getAll().subscribe(categories => this._categories$.next(categories));
    return this._categories$;
  }

  getAll = () => this.http.get<Category[]>('categories/');

  getById = id => this.http.get<Category[]>('categories/' + id);

  add = (newCategory: Category) =>
    this.http.post<Category>('categories/', newCategory).pipe(this.observableIterator.add);

  edit = (category: Category) => this.http.put<Category>('categories/' + category.id, category);

  remove = (category: Category) =>
    this.http.delete('categories/' + category.id).subscribe(this.observableIterator.remove(category));
}
