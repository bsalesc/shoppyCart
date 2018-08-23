import { Response, Request } from 'express';

export class UserController {
  finally = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Finally!!!!' });
  };
}
