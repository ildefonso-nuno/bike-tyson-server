import { Request, Response } from 'express';
import { getAllBicycles, createBicycle } from '../services/bicycle.service';

export const createBicycleController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newBicycle = await createBicycle(req.body);
    res.status(201).json(newBicycle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create bicycle' });
  }
};

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
