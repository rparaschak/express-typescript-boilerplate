import { NextFunction, Request, Response } from 'express';

export type IPolicyFunction = (req: Request, res: Response) => void;

export const checkPolicies = (policiesFunctions: IPolicyFunction[]): any =>
  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    descriptor.value = async (req: Request, res: Response, next: NextFunction) => {
      for (const policy of policiesFunctions) {
        await policy(req, res);
      }

      Promise.resolve(method(req, res))
        .catch(next);
    };
  };
