import { AxiosError } from 'axios';
import { NextFunction, Request, Response } from 'express';

export const handleAxiosErrors = (err: AxiosError, req: Request, res: Response, next: NextFunction) => {
  if (err.response) {
    console.log('axios');
    const { status, data } = err.response;

    return res.status(status).json({ data });
  }
  return next(err);
};