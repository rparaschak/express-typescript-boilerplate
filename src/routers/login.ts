import { Router } from 'express';

import { asyncMiddleware } from '../helpers/asyncMiddleware';
import { LoginController } from '../controllers/LoginController';

const router = Router();
const loginController = new LoginController();

/** Menu routes */
router.post('/email', asyncMiddleware(loginController.loginWithEmail));

export default router;
