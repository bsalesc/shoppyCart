import config from './config.env';
import { connect } from 'mongoose';

export const dbConnect = async () => {
  try {
    let configAuth = null;
    if (!config.get('MONGO_USER')) {
      configAuth = {
        user: config.get('MONGO_USER'),
        pass: config.get('MONGO_PASS'),
      };
    }
    await connect(
      config.get('MONGO_CONNECTIONSTRING'),
      configAuth,
    );
  } catch (error) {
    console.error(error);
  }
};
