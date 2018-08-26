import * as jwt from 'jsonwebtoken';
import { CONFIG } from '../configs/config.env';
import { UserDocument } from '../models/user.model';

export const generateToken = async (
  user: UserDocument,
): Promise<UserDocument> => {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + CONFIG.TOKEN_EXPIRATION * 60,
      data: user,
    },
    CONFIG.SECRET.toString(),
  );

  user.token = token;
  return await user.save();
};
