import { Application, Router } from 'express';
import { UserController } from '../controllers/user.controller';

export class UserRouter {
  private _app: Application;
  private _controller: UserController;

  constructor(app: Application) {
    this._app = app;
    this._controller = new UserController();
  }

  registerRoutes = () => {
    const router = Router();

    router.get('/', this._controller.finally);

    this._app.use('/users', router);
  };
}
