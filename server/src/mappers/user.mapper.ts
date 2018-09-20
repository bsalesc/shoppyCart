import { IUserBase } from '../interfaces/user.interface';

export const mapUserResult = user =>
  ({
    id: user.id || user._id,
    email: user.email,
    name: user.name,
    token: user.token || '',
  } as IUserBase);
