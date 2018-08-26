import * as bcrypt from 'bcrypt';
import { Document, Model, model } from 'mongoose';
import { Schema } from '../utils/schema.util';
import { IUser } from '../interfaces/user.interface';

export type UserDocument = IUser & Document;

export let UserSchema = Schema({
  id: String,
  email: String,
  pass: String,
  name: String,

  token: { type: String, required: false },
  googleToken: { type: String, required: false },
  facebookToken: { type: String, required: false },
});

export const User: Model<UserDocument> = model<UserDocument>(
  'User',
  UserSchema,
);
