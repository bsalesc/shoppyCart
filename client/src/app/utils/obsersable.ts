import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ObservableIterator } from '../interfaces/observable';

export const observableIterator = <T>(): ObservableIterator<T> => {
  let values: T[] = [];
  const observable = new Subject<T[]>();

  observable.subscribe(newValues => (values = newValues));

  return {
    observable,
    add: (source: Observable<T>) => source.pipe(tap(next => observable.next((values = [...values, next])))),
    edit: (source: Observable<T>) => source.pipe(tap(next => observable.next((values = [...values, next])))),
    remove: (source: Observable<T>) => source.pipe(tap(next => observable.next((values = [...values, next])))),
  };
};
