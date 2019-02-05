import { Subject, Observable } from 'rxjs';

export interface ObservableIterator<T> {
  observable: Subject<T[]>;
  add: (observable: Observable<T>) => Observable<T>;
  edit: (observable: Observable<T>) => Observable<T>;
  remove: (observable: Observable<T>) => Observable<T>;
}
