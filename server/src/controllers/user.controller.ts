import { Response, Request } from 'express';
import { User } from '../models/user.model';
import { generatePassword, comparePassword } from '../utils/password.util';

export class UserController {
  login = async (req: Request, res: Response) => {
    const { email, pass } = req.params;

    const user = await User.findOne({ email });

    if (await comparePassword(pass, user)) {
      res.status(200).json({ success: true, data: user });
    }

    res.status(400).json({ error: '' });
  };

  register = async (req: Request, res: Response) => {
    try {
      let { user } = req.body;
      await User.findOneAndRemove({ user });

      user = await generatePassword(req.body);

      const newUser = await User.create(req.body);

      res.status(200).json({ success: true, data: newUser });
    } catch (e) {
      console.error(e);
      res.status(400).json({ error: e });
    }
  };
}
