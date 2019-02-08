import { BaseController } from './base.controller';
import { CategoryRepository } from '../app/repositories/category.repository';

export class CategoryController extends BaseController<CategoryRepository> {
  constructor() {
    super(new CategoryRepository());
  }
}
