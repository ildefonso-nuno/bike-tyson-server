import { Request, Response } from 'express';
import { getUserById } from '../services/user.service';

export const getProfileController = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const user = await getUserById(userId);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
