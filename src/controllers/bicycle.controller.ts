import { Request, Response } from 'express';
import {
  getAllBicycles,
  createBicycle,
  updateBicycle,
  deleteBicycle,
} from '../services/bicycle.service';

export const createBicycleController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newBicycle = await createBicycle(req.body);
    res.status(200).json(newBicycle);
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

export const updateBicycleController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, ...updateData } = req.body;
    const updatedBicycle = await updateBicycle(id, updateData);

    res.status(200).json(updatedBicycle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update bicycle' });
  }
};

export const deleteBicycleController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.body;
    await deleteBicycle(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete bicycle' });
  }
};
