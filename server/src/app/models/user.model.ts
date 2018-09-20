import { Document, Model, model } from 'mongoose';
import { IUser } from '../../interfaces/user.interface';
import { UserSchema } from '../schema/user.schema';

export type IUserModel = IUser & Document;

export const User: Model<IUserModel> = model<IUserModel>('User', UserSchema);
