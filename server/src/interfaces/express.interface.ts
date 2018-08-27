import { Request as RequestBase, Response as ResponseBase } from 'express';
import { IUserBase } from './user.interface';

export interface Request extends RequestBase {
  user?: IUserBase;
  token?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface Response extends ResponseBase {}
