const { CONNECTION_STRING } = process.env;

const DEFAULT_CONNECTION_STRING =
  'mongodb://admin:admin@ds145289.mlab.com:45289/stmapp';

export const CONFIG = {
  CONNECTION_STRING: CONNECTION_STRING || DEFAULT_CONNECTION_STRING,
};
