import { expect } from 'chai';
import 'mocha';
import { UserController } from './user.controller';
import { mockRes, mockReq } from 'sinon-express-mock';

describe('User controller', () => {
  const controller = new UserController();
  const req = mockReq();
  const res = mockRes();

  it('should return finally', () => {
    controller.finally(req, res);

    expect(res.json.lastCall.args[0]).to.deep.equal({ message: 'Finally!!!!' });
  });
});
