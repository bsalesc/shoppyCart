import { Response, Request } from 'express';
import { User } from '../models/user.model';
import { generatePassword, comparePassword } from '../utils/password.util';

export class UserController {
  login = async (req: Request, res: Response) => {
    const { email, pass } = req.body;

    const user = await User.findOne({ email });

    if (user && (await comparePassword(pass, user))) {
      res.status(200).json({ success: true, data: user });
    } else {
      res.status(401).json({ error: 'Invalid user or password.' });
    }
  };

  register = async (req: Request, res: Response) => {
    try {
      let user = req.body;

      const checkUser = await User.findOne({ email: user.email });

      if (!checkUser) {
        user = await generatePassword(user);
        const newUser = await User.create(user);

        res.status(200).json({ success: true, data: newUser });
      } else {
        res.status(403).json({ error: 'Email already registered.' });
      }
    } catch (e) {
      res.status(400).json({ error: e });
    }
  };
}
