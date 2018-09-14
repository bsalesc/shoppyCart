import { Request, Response } from '../interfaces/express.interface';
import { BaseController } from './base.controller';
import { ItemRepository } from '../app/repositories/item.repository';
import { Item, IItemModel } from '../app/models/item.model';
import { IItem } from '../interfaces/item.interface';

export class ItemController extends BaseController<ItemRepository> {
  constructor() {
    super(new ItemRepository());
  }

  get = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { id: userId } = req.user;
    try {
      const items = !id
        ? await this._repository.findAll({ userId })
        : await this._repository.findById(id);

      res.status(200).json({ success: true, data: items });
    } catch (e) {
      res.status(400).json(e);
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const newItem: IItemModel = req.body;
      newItem.userId = req.user.id;
      const item = await this._repository.create(newItem);

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
      res.status(400).json(e);
    }
  };
}
