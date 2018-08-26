import { Application, Router } from 'express';
import { ItemController } from '../controllers/item.controller';
import { checkAuthentication } from '../utils/auth.util';

export class ItemRouter {
  private _app: Application;
  private _controller: ItemController;

  constructor(app: Application) {
    this._app = app;
    this._controller = new ItemController();
  }

  registerRoutes = () => {
    const router = Router();

    router.get('/', this._controller.get);
    router.get('/:id', this._controller.get);
    router.post('/', this._controller.create);
    router.put('/:id', this._controller.update);
    router.delete('/:id', this._controller.delete);

    this._app.use('/items', checkAuthentication, router);
  };
}
