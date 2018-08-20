import { Document, Model, model } from 'mongoose';
import { IItem } from '../interfaces/item.interface';
import { Schema } from '../utils/schema';

type Interface = IItem & Document;

export let ItemSchema = Schema({
  id: String,
  description: String,
  quantity: Number,
  price: Number,
  bought: { type: Boolean, default: false }
});

export const Item: Model<Interface> = model<Interface>('Item', ItemSchema);
