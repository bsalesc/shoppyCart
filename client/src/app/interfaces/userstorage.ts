import { User } from '.';

export interface UserStorage {
  user?: User;
  agreed: boolean;
  showBoughtItems: boolean;
}
