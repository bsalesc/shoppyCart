import { expect } from 'chai';
import * as sinon from 'sinon';
import 'mocha';
import { ItemController } from './item.controller';
import { mockRes, mockReq } from 'sinon-express-mock';
import { IItem } from '../interfaces/item.interface';
import { Item } from '../app/models/item.model';

describe('Item controller', () => {
  const controller = new ItemController();
  const req = mockReq({ user: { id: 'id' } });
  const res = mockRes();

  const itemMock: IItem = {
    bought: false,
    boughtAt: null,
    description: 'description',
    id: 'id',
    price: 1,
    userId: 'userId',
    quantity: 1,
  };

  let sandbox: sinon.SinonSandbox;
  beforeEach(() => (sandbox = sinon.createSandbox()));
  afterEach(() => sandbox.restore());

  describe('create function', () => {
    it('should create an item', async () => {
      sandbox.stub(Item, 'create').resolves(itemMock);
      await controller.create(req, res);

      expect(res.json.lastCall.args[0]).to.deep.equal({
        success: true,
        data: itemMock,
      });
    });

    it('should throw an error', async () => {
      sandbox.stub(Item, 'create').throws();
      await controller.create(req, res);

      expect(res.json.lastCall.args[0]).to.be.an.instanceOf(Error);
    });
  });

  describe('delete function', () => {
    it('should delete an item', async () => {
      sandbox.stub(Item, 'deleteOne').resolves();
      await controller.delete(req, res);

      expect(res.json.lastCall.args[0]).to.deep.equal({
        success: true,
      });
    });

    it('should throw an error', async () => {
      sandbox.stub(Item, 'deleteOne').throws();
      await controller.delete(req, res);

      expect(res.json.lastCall.args[0]).to.be.an.instanceOf(Error);
    });
  });

  describe('get function', () => {
    it('should return items', async () => {
      sandbox.stub(Item, 'find').resolves([itemMock]);
      await controller.get(req, res);

      expect(res.json.lastCall.args[0]).to.deep.equal({
        success: true,
        data: [itemMock],
      });
    });

    it('should throw an error', async () => {
      sandbox.stub(Item, 'find').throws();
      await controller.get(req, res);

      expect(res.json.lastCall.args[0]).to.be.an.instanceOf(Error);
    });
  });

  describe('update function', () => {
    it('should update an item', async () => {
      sandbox.stub(Item, 'findOne').resolves(itemMock);
      sandbox.stub(Item, 'updateOne').resolves();

      await controller.update(req, res);

      expect(res.json.lastCall.args[0]).to.deep.equal({
        success: true,
        data: itemMock,
      });
    });

    it('should throw an error', async () => {
      sandbox.stub(Item, 'findOne').throws();
      sandbox.stub(Item, 'updateOne').throws();
      await controller.update(req, res);

      expect(res.json.lastCall.args[0]).to.be.an.instanceOf(Error);
    });
  });
});
