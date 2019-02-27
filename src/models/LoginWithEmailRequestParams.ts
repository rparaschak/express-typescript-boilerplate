import { BaseModel } from './BaseModel';

export class LoginWithEmailRequestParams extends BaseModel {

  public email: string;
  public password: string;

  protected fields: string[] = [
    'email',
    'password',
  ];

  constructor(object: any) {
    super();
    this.populate(object);
  }
}