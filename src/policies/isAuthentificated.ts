import { CustomError } from '../models/CustomErrors';
import { IPolicyFunction } from '../utils/checkPolicies';

export const isAuthenticated: IPolicyFunction = async (req, res) => {
  throw new CustomError(403, 'Bad token.');
};
