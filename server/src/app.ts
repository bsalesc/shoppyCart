import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as mongoose from 'mongoose';

import { ItemRouter } from './routes/item.route';
import { UserRouter } from './routes/user.route';

import config from './configs/config.env';
import { jwtDecode } from './utils/token.util';

export default async (): Promise<express.Application> => {
  const app = express();
  try {
    let configAuth = null;
    if (!config.get('MONGO_USER')) {
      configAuth = {
        user: config.get('MONGO_USER'),
        pass: config.get('MONGO_PASS'),
      };
    }
    await mongoose.connect(
      config.get('MONGO_CONNECTIONSTRING'),
      configAuth,
    );
  } catch (error) {
    console.error(error);
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  if (!process.env.DISABLE_CORS) {
    app.use(cors());
  }

  app.use(jwtDecode());

  const userRouter = new UserRouter(app);
  userRouter.registerRoutes();
  const itemRouter = new ItemRouter(app);
  itemRouter.registerRoutes();

  return app;
};
