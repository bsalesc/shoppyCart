import { MongoRepository } from './mongo.repository';
import { IUserModel, User } from '../models/user.model';

export class UserRepository extends MongoRepository<IUserModel> {
  constructor() {
    super(User);
  }
}
