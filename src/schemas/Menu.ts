/**
 * Example of Typegoose schema. Can be removed.
 */
import { prop, Typegoose } from 'typegoose';

export class Menu extends Typegoose {

  @prop({ required: true })
  public name: string;

  @prop()
  public description: string;

  @prop()
  public deleted?: boolean;
}

export default new Menu().getModelForClass(Menu);
