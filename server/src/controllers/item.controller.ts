import { Request, Response } from '../interfaces/express.interface';
import { BaseController } from './base.controller';
import { ItemRepository } from '../app/repositories/item.repository';

export class ItemController extends BaseController<ItemRepository> {
  constructor() {
    super(new ItemRepository());
  }

  bought = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const item = await this._repository.findById(id);
      item.bought = !item.bought;
      item.boughtAt = item.bought ? new Date() : null;
      await this._repository.edit(id, item);

      res.status(200).json({ success: true, data: item });
    } catch (e) {
      res.status(400).json(e);
    }
  };
}
