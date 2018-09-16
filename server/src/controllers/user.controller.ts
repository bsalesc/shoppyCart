import { Request, Response } from '../interfaces/express.interface';
import { generatePassword, comparePassword } from '../utils/auth.util';
import { mapUserResult } from '../mappers/user.mapper';
import { generateToken } from '../utils/token.util';
import { User } from '../app/models/user.model';
import { BaseController } from './base.controller';
import { UserRepository } from '../app/repositories/user.repository';

export class UserController extends BaseController<UserRepository> {
  constructor() {
    super(new UserRepository());
  }

  login = async (req: Request, res: Response) => {
    const { email, pass } = req.query;

    let user = await User.findOne({ email });

    if (user && (await comparePassword(pass, user))) {
      user = await generateToken(user);
      res.status(200).json({ success: true, data: mapUserResult(user) });
    } else {
      res.status(401).json('Invalid user or password.');
    }
  };

  logout = async (req: Request, res: Response) => {
    const { token } = req;

    const user = await User.findOne({ token });

    if (user) {
      user.token = null;
      user.save();
    }

    res.status(200).json({ success: true });
  };

  register = async (req: Request, res: Response) => {
    try {
      let user = req.body;

      const checkUser = await User.findOne({ email: user.email });

      if (!checkUser) {
        user = await generatePassword(user);

        let newUser = await User.create(user);
        newUser = await generateToken(newUser);

        res.status(200).json({ success: true, data: mapUserResult(newUser) });
      } else {
        res.status(403).json('Email already registered.');
      }
    } catch (e) {
      res.status(400).json(e);
    }
  };
}
