import { Request, Response } from 'express';
import { getAllBicycles } from '../services/bicycle.service';

export const getAllBicyclesController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const bicycles = await getAllBicycles();
    res.status(200).json(bicycles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bicycles' });
  }
};
