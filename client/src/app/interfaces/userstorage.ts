import { User } from './user';

export interface UserStorage {
  user?: User;
  agreed: boolean;
  showBoughtItems: boolean;
}
