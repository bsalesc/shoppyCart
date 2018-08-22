const { CONNECTION_STRING, DISABLE_CORS } = process.env;

const DEFAULT_CONNECTION_STRING =
  'mongodb://admin:admin@ds145289.mlab.com:45289/stmapp';

const DEFAULT_DISABLE_CORS = false;

export const CONFIG = {
  CONNECTION_STRING: CONNECTION_STRING || DEFAULT_CONNECTION_STRING,
  DISABLE_CORS: DISABLE_CORS || DEFAULT_DISABLE_CORS,
};
