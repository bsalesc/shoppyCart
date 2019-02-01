import { BaseController } from './base.controller';
import { ItemRepository } from '../app/repositories/item.repository';
import { CategoryRepository } from '../app/repositories/category.repository';

export class CategoryController extends BaseController<CategoryRepository> {
  constructor() {
    super(new ItemRepository());
  }
}
