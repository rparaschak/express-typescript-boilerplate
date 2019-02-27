import { hash, compare } from 'bcrypt';

const saltRounds = 10;

export class PasswordService {

  /**
   * @param {string} password
   * @returns {Promise<string>}
   */
  public static passToHash(password: string) {
    return hash(password, saltRounds);
  }

  /**
   * @param {string} passwordHash
   * @param {string} password
   * @returns {Promise<boolean>}
   */
  public static compareHashWithPass(passwordHash: string, password: string) {
    return compare(password, passwordHash);
  }
}
