import { NextFunction, Request, Response } from 'express';

export const handleGlobalErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).send(err.message);
};
