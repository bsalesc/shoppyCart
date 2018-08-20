import { Request, Response, Application } from 'express';
import { UserController } from '../controllers/user.controller';

export class UserRouter {
  private _app: Application;
  private _controller: UserController;

  constructor(app: Application) {
    this._app = app;
    this._controller = new UserController();
  }

  registerRoutes = () => {
    this._app.route('/').get(this._controller.finally);
  };
}
