import { MongoRepository } from './mongo.repository';
import { ICategoryModel, Category } from '../models/category.model';

export class CategoryRepository extends MongoRepository<ICategoryModel> {
  constructor() {
    super(Category);
  }
}
