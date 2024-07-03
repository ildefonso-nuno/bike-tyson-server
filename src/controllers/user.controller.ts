import { Request, Response } from 'express';
import { getUserById, updateUser } from '../services/user.service';

export const getUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const user = await getUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get user profile' });
  }
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = (req as any).user.userId;
    const updateData = req.body;
    const updatedUser = await updateUser(userId, updateData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user profile' });
  }
};
