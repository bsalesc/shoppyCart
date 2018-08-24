import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import * as mongoose from 'mongoose';

import app from './app';

let sandbox: sinon.SinonSandbox;
beforeEach(() => (sandbox = sinon.createSandbox()));
afterEach(() => sandbox.restore());

describe('App', () => {
  it('should return the application with parsers', async () => {
    sandbox.stub(mongoose, 'connect').resolves();
    const appInstance = await app();

    const middlewares = ['jsonParser', 'urlencodedParser'];

    expect(
      appInstance._router.stack.filter(f => middlewares.indexOf(f.name) >= 0),
    ).length(2);
  });
});
