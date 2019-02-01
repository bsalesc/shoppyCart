import { IBaseSimpleModel } from './basemodel.interface';

export interface IUserBase extends IBaseSimpleModel {
  email: string;
  name: string;
  token?: string;
}

export interface IUser extends IUserBase {
  pass: string;

  googleToken?: string;
  facebookToken?: string;
}
