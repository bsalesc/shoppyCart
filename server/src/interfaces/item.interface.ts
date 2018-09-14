export interface IItem {
  id: string;
  description: string;
  quantity: number;
  bought: boolean;
  userId: string;
  price?: number;
}
