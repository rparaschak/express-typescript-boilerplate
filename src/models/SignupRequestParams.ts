import { BaseModel } from './BaseModel';

export class SignupRequestParams extends BaseModel {

  public name: string;
  public email: string;
  public password: string;

  protected fields: string[] = [
    'name',
    'email',
    'password',
  ];

  constructor(object: any) {
    super();
    this.populate(object);
  }
}