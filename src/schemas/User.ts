import { prop, Typegoose } from 'typegoose';

export class User extends Typegoose {

  @prop({ required: true })
  public email: string;

  @prop()
  public name: string;

  @prop()
  public passwordHash?: string;

  @prop()
  public facebookId: string;

  @prop()
  public googleId: string;
}

export default new User().getModelForClass(User);
