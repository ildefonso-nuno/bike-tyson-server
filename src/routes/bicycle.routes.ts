import { Router } from 'express';
import upload from '../configs/multer.config';
import {
  getAllBicyclesController,
  createBicycleController,
  updateBicycleController,
  deleteBicycleController,
} from '../controllers/bicycle.controller';

const router = Router();

// Create a new bicycle
router.post('/', upload.array('photos', 10), createBicycleController);

// Get all bicycles
router.get('/', getAllBicyclesController);

// Update a bicycle
router.put('/', upload.array('photos', 10), updateBicycleController);

// Delete a bicycle
router.delete('/', deleteBicycleController);

export default router;
