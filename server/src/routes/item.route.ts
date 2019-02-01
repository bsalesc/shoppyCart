import { Application } from 'express';
import { ItemController } from '../controllers/item.controller';
import { checkAuthentication } from '../utils/auth.util';
import { BaseRouter } from './base.route';

export class ItemRouter extends BaseRouter<ItemController> {
  constructor(app: Application) {
    super(app, new ItemController());
  }

  registerRoutes = () => {
    this.router.put('/:id/bought', this.controller.bought);

    this.app.use('/items', checkAuthentication, this.router);
  };
}
