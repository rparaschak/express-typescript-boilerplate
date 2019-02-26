import { NextFunction, Request, Response } from 'express';

import { CustomError } from '../models/CustomErrors';

export const handleCustomErrors = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    const { statusCode, message } = err;
    return res.status(statusCode).json({ message });
  }

  return next(err);
};
