import * as jwt from 'jsonwebtoken';
import config from '../configs/config.env';
import { RequestHandler, NextFunction } from 'express';
import { Request, Response } from '../interfaces/express.interface';

import { UserDocument } from '../models/user.model';
import { IUserBase } from '../interfaces/user.interface';

export const jwtDecode = (): RequestHandler => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token: string = req.headers.token as string;

  req.user = null;
  req.token = null;

  if (token) {
    const user = jwt.verify(
      token,
      config.get('SECRET').toString(),
    ) as IUserBase;
    req.user = user;
    req.token = token;
  }

  next();
};

export const generateToken = async (
  user: UserDocument,
): Promise<UserDocument> => {
  const { _id: id, email, name } = user;
  const token = jwt.sign({ id, email, name }, config.get('SECRET').toString());
  user.token = token;

  return await user.save();
};
