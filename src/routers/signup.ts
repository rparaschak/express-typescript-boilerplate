import { Router } from 'express';

import { SignupController } from '../controllers/SignupController';
import { asyncMiddleware } from '../helpers/asyncMiddleware';

const router = Router();
const signupController = new SignupController();

/** Menu routes */
router.post('/signup', asyncMiddleware(signupController.createUserByEmail));

export default router;
