import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

import { ItemRouter } from './routes/item.route';
import { UserRouter } from './routes/user.route';

import { jwtDecode } from './utils/token.util';

export default async (): Promise<express.Application> => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());

  app.use(jwtDecode());

  const userRouter = new UserRouter(app);
  userRouter.registerRoutes();
  const itemRouter = new ItemRouter(app);
  itemRouter.registerRoutes();

  return app;
};
