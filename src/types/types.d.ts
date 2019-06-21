import { User } from '../schemas/User';

declare module '*.json' {
  const value: any;
  export default value;
}

declare module 'express' {


  export interface Request {
    user?: User;
  }
}