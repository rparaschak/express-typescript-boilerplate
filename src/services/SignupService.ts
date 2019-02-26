import { hash, compare } from 'bcrypt';

const saltRounds = 10;

export class SignupService {
  public static passToHash(password: string) {
    return hash(password, saltRounds);
  }

  public static compareHashWithPass(passwordHash: string, password: string) {
    return compare(password, passwordHash);
  }
}
