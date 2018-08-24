import { IUserBase } from '../interfaces/user.interface';

export const mapUserResult = user =>
  ({
    id: user.id,
    email: user.email,
    name: user.name,
    token: user.token || '',
  } as IUserBase);
