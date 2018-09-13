import { BaseRepository } from '../app/repositories/base.repository';

export abstract class BaseController<T extends BaseRepository<any>> {
  public _repository: T;

  constructor(repository: T) {
    this._repository = repository;
  }
}
