import { Request, Response } from 'express';

import { SignupRequestParams } from '../models/SignupRequestParams';
import UserSchema from '../schemas/User';
import { CustomError } from '../models/CustomErrors';
import { PasswordService } from '../services/PasswordService';

export class SignupController {
  public async createUserByEmail(req: Request, res: Response) {
    const signupParams = new SignupRequestParams(req.body);
    const user = await UserSchema.findOne({ email: signupParams.email });

    if (user) {
      throw new CustomError(409, 'User with such email already exists.');
    }

    const passHash = PasswordService.passToHash(signupParams.password);

    const newUser = new UserSchema({
      email: signupParams.email,
      name: signupParams.name,
      passwordHash: passHash,
    });

    await newUser.save();

    res.status(201).send();
  }
}
