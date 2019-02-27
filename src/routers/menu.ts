import { Router } from 'express';

import { MenuController } from '../controllers/MenuController';
import { asyncMiddleware } from '../helpers/asyncMiddleware';

const router = Router();
const menuController = new MenuController();

router.use((req, res, next) => {
  console.log('Middleware');
  next();
});

/** Menu routes */
router.post('/:menuId', asyncMiddleware(menuController.getMenu));
router.post('/', asyncMiddleware(menuController.createMenu));
router.put('/:menuId', asyncMiddleware(menuController.editMenu));
router.delete('/:menuId', asyncMiddleware(menuController.deleteMenu));

export default router;
