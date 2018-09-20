export interface IUserBase {
  id: any;
  email: string;
  name: string;
  token?: string;
}

export interface IUser extends IUserBase {
  pass: string;

  googleToken?: string;
  facebookToken?: string;
}
