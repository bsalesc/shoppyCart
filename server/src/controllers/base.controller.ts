import { Request, Response } from '../interfaces/express.interface';
import { BaseRepository } from '../app/repositories/base.repository';

export abstract class BaseController<T extends BaseRepository<any>> {
  public _repository: T;

  constructor(repository: T) {
    this._repository = repository;
  }

  get = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { id: userId } = req.user;
    try {
      const records = !id ? await this._repository.findAll({ userId }) : await this._repository.findById(id);

      res.status(200).json({ success: true, data: records });
    } catch (e) {
      res.status(400).json(e);
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const newRecord = req.body;
      newRecord.userId = req.user.id;
      const record = await this._repository.create(newRecord);

      res.status(200).json({ success: true, data: record });
    } catch (e) {
      res.status(400).json(e);
    }
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const recordEdited = req.body;

      const record = await this._repository.findById(id);
      await this._repository.edit(id, recordEdited);

      res.status(200).json({ success: true, data: record });
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
