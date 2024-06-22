import { Router } from 'express';
import {
  getAllBicyclesController,
  createBicycleController,
  updateBicycleController,
} from '../controllers/bicycle.controller';

const router = Router();

// Create a new bicycle
router.post('/', createBicycleController);

// Get all bicycles
router.get('/', getAllBicyclesController);

// Update a bicycle
router.put('/', updateBicycleController);

export default router;
