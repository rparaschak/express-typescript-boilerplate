/**
 * Example of Request params model. Can be removed.
 */
import { BaseModel } from './BaseModel';

export class CreateMenuRequestParams extends BaseModel {

  public name: string;
  public description: string;
  public deleted: string;

  protected fields: string[] = [
    'name',
    'description',
    'deleted',
  ];

  constructor(object: any) {
    super();
    this.populate(object);
  }
}