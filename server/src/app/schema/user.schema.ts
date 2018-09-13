import { Schema } from '../../utils/schema.util';

export let UserSchema = Schema({
  id: String,
  email: String,
  pass: String,
  name: String,

  token: { type: String, required: false },
  googleToken: { type: String, required: false },
  facebookToken: { type: String, required: false },
});
