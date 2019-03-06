import { Request, Response } from 'express';

import { LoginWithEmailRequestParams } from '../models/LoginWithEmailRequestParams';
import UserSchema from '../schemas/User';
import { CustomError } from '../models/CustomErrors';
import { PasswordService } from '../services/PasswordService';

export class LoginController {

  public async loginWithEmail(req: Request, res: Response) {
    const loginParams = new LoginWithEmailRequestParams(req.body);
    const user = await UserSchema.findOne({ email: loginParams.email });

    if (!user) {
      throw new CustomError(403, 'Wrong credentials.');
    }

    const passwordMatch = await PasswordService.compareHashWithPass(user.passwordHash, loginParams.password);
    if (!passwordMatch) {
      return res.status(403).send('Wrong credentials');
    }
    res.status(200).send('yay!');
  }
}
