import { Application, Router } from 'express';
import { ItemController } from '../controllers/item.controller';
import { checkAuthentication } from '../utils/auth.util';
import { BaseController } from '../controllers/base.controller';

export abstract class BaseRouter<T extends BaseController<any>> {
  public controller: T;
  public app: Application;

  public router: Router;

  constructor(app: Application, controller: T) {
    this.app = app;
    this.controller = controller;
    this.router = Router();

    this.router.get('/', this.controller.get);
    this.router.get('/:id', this.controller.get);
    this.router.post('/', this.controller.create);
    this.router.put('/:id', this.controller.update);
    this.router.delete('/:id', this.controller.delete);
  }

  abstract registerRoutes(): void;
}
