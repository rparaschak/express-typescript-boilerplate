import { prop, Typegoose } from 'typegoose';
import { index } from 'typegoose/lib';

@index({ email: 1 }, { unique: true })
@index({ facebookId: 1 }, { unique: true })
@index({ googleId: 1 }, { unique: true })
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

  @prop({ default: false })
  public emailVerified: boolean;
}

export default new User().getModelForClass(User);
