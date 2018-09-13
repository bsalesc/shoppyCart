import { Response, Request } from 'express';
import { BaseController } from './base.controller';
import { ItemRepository } from '../app/repositories/item.repository';
import { Item } from '../app/models/item.model';

export class ItemController extends BaseController<ItemRepository> {
  constructor() {
    super(new ItemRepository());
  }

  get = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const items = !id
        ? await this._repository.findAll()
        : await this._repository.findById(id);

      res.status(200).json({ success: true, data: items });
    } catch (e) {
      res.status(400).json(e);
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const item = await this._repository.create(req.body);

      res.status(200).json({ success: true, data: item });
    } catch (e) {
      res.status(400).json(e);
    }
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await this._repository.edit(id, req.body);
      const item = await this._repository.findById(id);

      res.status(200).json({ success: true, data: item });
    } catch (e) {
      res.status(400).json(e);
    }
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await this._repository.delete(id);

      res.status(200).json({ success: true });
    } catch (e) {
      res.status(400).json({ error: e });
    }
  };
}
