import { MongoRepository } from './mongo.repository';

export abstract class BaseRepository<T> {
  abstract findAll(): Promise<T[]>;
  abstract findById(id: number): Promise<T>;
  abstract create(data: T): Promise<T>;
  abstract delete(id: number): void;
  abstract edit(id: number, data: T): Promise<T>;
}
