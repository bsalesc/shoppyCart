import { Request, Response, Application } from 'express';

export class UserRouter {
  private _app: Application;
  constructor(app: Application) {
    this._app = app;
  }

  registerRoutes = () => {
    this._app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successfulll!!!!'
      });
    });
  };
}
