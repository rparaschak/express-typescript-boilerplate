type AsyncFunction = (req: any, res: any, next: any) => void;

export const asyncMiddleware = (fn: AsyncFunction) =>
  (req: any, res: any, next: any) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };
