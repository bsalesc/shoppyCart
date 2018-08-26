import * as bcrypt from 'bcrypt';
import { IUser } from '../interfaces/user.interface';
import { CONFIG } from '../configs/config.env';
import { RequestHandler, Request, Response, NextFunction } from 'express';
import { User } from '../models/user.model';

export const comparePassword = async (passToCompare: string, user: IUser) =>
  await bcrypt.compare(passToCompare, user.pass);

export const generatePassword = async user => {
  if (!!user.id && !user.isModified('pass')) return user;

  const salt = await bcrypt.genSalt(CONFIG.SECRET);

  const passwordHash = await bcrypt.hash(user.pass, salt);

  user.pass = passwordHash;

  return user;
};

export const checkAuthentication = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userToken = req['user'];
  const user = await User.findOne({ token: req['token'] });

  if (user && user._id.toString() === userToken.id) {
    next();
  } else {
    res.status(401).json({ error: 'Invalid token.' });
  }
};
