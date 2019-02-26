import { Request, Response } from 'express';

import { SignupRequestParams } from '../models/SignupRequestParams';
import UserSchema from '../schemas/User';
import { CustomError } from '../models/CustomErrors';
import { SignupService } from '../services/SignupService';

export class SignupController {
  public async createUserByEmail(req: Request, res: Response) {
    const signupParams = new SignupRequestParams(req.body);
    const user = await UserSchema.findOne({ email: signupParams.email });

    if (user) {
      throw new CustomError(409, 'User with such email already exists.');
    }

    const passHash = SignupService.passToHash(signupParams.password);

    const newUser = new UserSchema({
      email: signupParams.email,
      name: signupParams.name,
      passwordHash: passHash,
    });

    await newUser.save();
  }
}
