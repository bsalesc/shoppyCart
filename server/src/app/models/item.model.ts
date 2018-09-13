import { Document, Model, model } from 'mongoose';
import { IItem } from '../../interfaces/item.interface';
import { ItemSchema } from '../schema/item.schema';

export type IItemModel = IItem & Document;

export const Item: Model<IItemModel> = model<IItemModel>('Item', ItemSchema);
