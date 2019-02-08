import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BaseModel, ObservableIterator } from '../interfaces';

export const observableIterator = <T extends BaseModel>(): ObservableIterator<T> => {
  let values: T[] = [];
  const observable = new Subject<T[]>();

  observable.subscribe(newValues => (values = newValues));

  return {
    observable,
    add: (source: Observable<T>) => source.pipe(tap(next => observable.next((values = [...values, next])))),
    edit: (source: Observable<T>) =>
      source.pipe(
        tap(next => {
          const valueIndex = values.findIndex(valueToFind => valueToFind.id === next.id);
          observable.next(Object.assign([], values, { [valueIndex]: next }));

          return source;
        }),
      ),
    remove: (value: T) => () => {
      const valueIndex = values.findIndex(valueToFind => valueToFind.id === value.id);
      if (valueIndex >= 0) {
        values.splice(valueIndex, 1);
        observable.next(values);
      }
    },
  };
};
