import * as bcrypt from 'bcryptjs';
import { IUser } from '../interfaces/user.interface';
import config from '../configs/config.env';
import { NextFunction } from 'express';
import { Request, Response } from '../interfaces/express.interface';
import { User } from '../app/models/user.model';

export const comparePassword = async (passToCompare: string, user: IUser) =>
  await bcrypt.compare(passToCompare, user.pass);

export const generatePassword = async user => {
  if (!!user.id && !user.isModified('pass')) return user;

  const passwordHash = await bcrypt.hash(user.pass, config.get('SECRET'));
  user.pass = passwordHash;

  return user;
};

export const checkAuthentication = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userToken = req.user;
  const user = userToken && (await User.findOne({ token: req.token }));

  if (user && user._id.toString() === userToken.id) {
    next();
  } else {
    res.status(401).json('Invalid token.');
  }
};
