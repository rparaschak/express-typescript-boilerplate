/**
 * Example controller. Can be removed.
 */
import { Request, Response } from 'express';

import { CreateMenuRequestParams } from '../models/CreateMenuRequestParams';
import MenuSchema from '../schemas/Menu';
import { checkPolicies } from '../utils/checkPolicies';
import { isAuthenticated } from '../policies/isAuthentificated';

export class MenuController {
  public async getMenu(req: Request, res: Response) {
    const menu = await MenuSchema.findOne({ _id: req.params.menuId });
    if (!menu) {
      return res.status(404).json({ message: 'Menu item was not found.' });
    }
    res.status(200).json(menu);
  }

  @checkPolicies([isAuthenticated])
  public async createMenu(req: Request, res: Response) {
    const menuQueryParams = new CreateMenuRequestParams(req.body);
    const menu = new MenuSchema(menuQueryParams);
    const result = await menu.save();
    return res.status(201).json(result);
  }

  public async editMenu(req: Request, res: Response) {
    const menuQueryParams = new CreateMenuRequestParams(req.body);
    const updatedMenu = await MenuSchema.findOneAndUpdate(
        { _id: req.params.menuId },
        menuQueryParams,
    );
    return res.status(200).json(updatedMenu);
  }

  public async deleteMenu(req: Request, res: Response) {
    await MenuSchema.findOneAndUpdate(
        { _id: req.params.menuId },
        { deleted: true });
    return res.status(204).send();
  }
}
