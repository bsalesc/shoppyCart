import { Response, Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { User } from '../models/user.model';
import { generatePassword, comparePassword } from '../utils/auth.util';
import { mapUserResult } from '../mappers/user.mapper';
import { generateToken } from '../utils/token.util';

export class UserController {
  login = async (req: Request, res: Response) => {
    const { email, pass } = req.query;

    let user = await User.findOne({ email });

    if (user && (await comparePassword(pass, user))) {
      user = await generateToken(user);
      res.status(200).json({ success: true, data: mapUserResult(user) });
    } else {
      res.status(401).json({ error: 'Invalid user or password.' });
    }
  };

  logout = async (req: Request, res: Response) => {};

  register = async (req: Request, res: Response) => {
    try {
      let user = req.body;

      const checkUser = await User.findOne({ email: user.email });

      if (!checkUser) {
        user = await generatePassword(user);
        let newUser = await User.create(user);
        newUser = await generateToken(user);

        res.status(200).json({ success: true, data: mapUserResult(newUser) });
      } else {
        res.status(403).json({ error: 'Email already registered.' });
      }
    } catch (e) {
      res.status(400).json({ error: e });
    }
  };
}
