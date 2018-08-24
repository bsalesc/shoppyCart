export interface IUser {
  id: any;
  email: string;
  pass: string;
  name: string;

  googleToken: string;
  facebookToken: string;
}

export interface IUserSafe {
  id: any;
  email: string;
  name: string;
}
