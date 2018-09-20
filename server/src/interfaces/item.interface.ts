export interface IItem {
  id: string;
  description: string;
  quantity: number;
  bought: boolean;
  boughtAt: string | Date;
  userId: string;
  price?: number;
}
