import { Application } from 'express';
import { checkAuthentication } from '../utils/auth.util';
import { BaseRouter } from './base.route';
import { CategoryController } from '../controllers/category.controller';

export class CategoryRouter extends BaseRouter<CategoryController> {
  constructor(app: Application) {
    super(app, new CategoryController());
  }

  registerRoutes = () => {
    this.app.use('/categories', checkAuthentication, this.router);
  };
}
