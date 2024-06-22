import { Request, Response } from 'express';
import { isError } from '../helpers/typeGuards';
import { handlePhotoUpload } from '../helpers/photoUploadHelper';
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
    // Create bicycle without photo URL first
    const newBicycle = await createBicycle(req.body);

    try {
      const photosUrlArray = await handlePhotoUpload(req, res, newBicycle.id);
      res.status(201).json({ ...newBicycle, photos_url: photosUrlArray });
    } catch (error) {
      if (isError(error)) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Unknown error occurred' });
      }
    }
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Failed to create bicycle' });
    }
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

    try {
      const photosUrlArray = await handlePhotoUpload(req, res, id);
      res.status(200).json({ ...updatedBicycle, photos_url: photosUrlArray });
    } catch (error) {
      if (isError(error)) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Unknown error occurred' });
      }
    }
  } catch (error) {
    if (isError(error)) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Failed to update bicycle' });
    }
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
