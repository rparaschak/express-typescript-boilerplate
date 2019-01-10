import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../models/CustomError';

export const customErrorsHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction) => {
  if (!(err instanceof CustomError)) {
    return next(err);
  }
  const customError = err as CustomError;

  res.status(customError.statusCode);
  res.send(customError.message);
};