import { Schema } from '../../utils/schema.util';

export let ItemSchema = Schema({
  id: String,
  description: String,
  quantity: Number,
  price: Number,
  bought: { type: Boolean, default: false },
});
