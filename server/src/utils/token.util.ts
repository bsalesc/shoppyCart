import * as jwt from 'jsonwebtoken';
import config from '../configs/config.env';
import { RequestHandler, NextFunction } from 'express';
import { Request, Response } from '../interfaces/express.interface';

import { IUserBase } from '../interfaces/user.interface';
import { IUserModel } from '../app/models/user.model';

export const jwtDecode = (): RequestHandler => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  req.token = req.headers.authorization as string;
  req.user = null;

  try {
    if (req.token) {
      const user = jwt.verify(
        req.token,
        config.get('SECRET').toString(),
      ) as IUserBase;
      req.user = user;
    }

    next();
  } catch (e) {
    res.status(401).json('Invalid token.');
  }
};

export const generateToken = async (user: IUserModel): Promise<IUserModel> => {
  const { _id: id, email, name } = user;
  const token = jwt.sign({ id, email, name }, config.get('SECRET').toString());
  user.token = token;

  return await user.save();
};
