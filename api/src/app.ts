import * as mongoose from 'mongoose';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { UserRouter } from './routes/user.route';
import { ItemRouter } from './routes/item.route';

export default async (): Promise<express.Application> => {
  let app: express.Application;
  app = express();

  try {
    await mongoose.connect(
      process.env.CONNECTION_STRING || 'mongodb://user:pass@localhost:27017/'
    );
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
