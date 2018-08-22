import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as mongoose from 'mongoose';

import { ItemRouter } from './routes/item.route';
import { UserRouter } from './routes/user.route';

import { CONFIG } from './configs/config.env';

export default async (): Promise<express.Application> => {
  let app: express.Application;
  app = express();

  try {
    await mongoose.connect(CONFIG.CONNECTION_STRING);
  } catch (error) {
    console.error(error);
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  if (!process.env.DISABLE_CORS) {
    app.use(cors());
  }

  const userRouter = new UserRouter(app);
  userRouter.registerRoutes();
  const itemRouter = new ItemRouter(app);
  itemRouter.registerRoutes();

  return app;
};
