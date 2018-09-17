import { Schema } from '../../utils/schema.util';

export let ItemSchema = Schema({
  id: String,
  description: String,
  quantity: Number,
  price: Number,
  userId: String,
  bought: { type: Boolean, default: false },
  boughtAt: { type: Date, default: null },
});
