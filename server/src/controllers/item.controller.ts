import { Response, Request } from 'express';
import { Item } from '../models/item.model';

export class ItemController {
  get = async (req: Request, res: Response) => {
    try {
      const items = await Item.find({});

      res.status(200).json({ success: true, data: items });
    } catch (e) {
      res.status(400).json({ error: e });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const item = await Item.create(req.body);

      res.status(200).json({ success: true, data: item });
    } catch (e) {
      res.status(400).json({ error: e });
    }
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await Item.updateOne({ _id: id }, req.body);
      const item = await Item.findOne({ _id: id });

      res.status(200).json({ success: true, data: item });
    } catch (e) {
      res.status(400).json({ error: e });
    }
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await Item.deleteOne({ _id: id });

      res.status(200).json({ success: true });
    } catch (e) {
      res.status(400).json({ error: e });
    }
  };
}
