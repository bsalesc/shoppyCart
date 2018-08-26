import * as bcrypt from 'bcrypt';
import { IUser } from '../interfaces/user.interface';
import { CONFIG } from '../configs/config.env';

export const comparePassword = async (passToCompare: string, user: IUser) =>
  await bcrypt.compare(passToCompare, user.pass);

export const generatePassword = async user => {
  if (!!user.id && !user.isModified('pass')) return user;

  const salt = await bcrypt.genSalt(CONFIG.SECRET);

  const passwordHash = await bcrypt.hash(user.pass, salt);

  user.pass = passwordHash;

  return user;
};
