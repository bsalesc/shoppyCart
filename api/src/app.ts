import * as express from 'express';
import * as bodyParser from 'body-parser';
import { UserRouter } from './routes/users.route';

export default ((): express.Application => {
  let app: express.Application;
  app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  const userRouter = new UserRouter(app);
  userRouter.registerRoutes();

  return app;
})();
