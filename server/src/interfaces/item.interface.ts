import { IBaseModel } from './basemodel.interface';

export interface IItem extends IBaseModel {
  description: string;
  quantity: number;
  bought: boolean;
  boughtAt: string | Date;
  price?: number;
}
