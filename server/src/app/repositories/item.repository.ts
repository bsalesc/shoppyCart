import { IItemModel, Item } from '../models/item.model';
import { MongoRepository } from './mongo.repository';

export class ItemRepository extends MongoRepository<IItemModel> {
  constructor() {
    super(Item);
  }
}
