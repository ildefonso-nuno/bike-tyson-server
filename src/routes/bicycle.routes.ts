import { Router } from 'express';
import {
  getAllBicyclesController,
  getBicycleByIdController,
  getAllBicyclesByUserIdController,
  createBicycleController,
  updateBicycleController,
  deleteBicycleController,
} from '../controllers/bicycle.controller';

const router = Router();

// Create a new bicycle
router.post('/', createBicycleController);

// Get all bicycles
router.get('/', getAllBicyclesController);

// Get all bicycles id
router.get('/:id', getBicycleByIdController);

// Get all bicycles by user id
router.get('/user/:user_id', getAllBicyclesByUserIdController);

// Update a bicycle
router.put('/', updateBicycleController);

// Delete a bicycle
router.delete('/', deleteBicycleController);

export default router;
