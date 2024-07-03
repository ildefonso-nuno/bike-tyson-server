import { Router } from 'express';
import {
  getAllBicyclesController,
  getBicycleByIdController,
  getAllBicyclesByUserIdController,
  createBicycleController,
  updateBicycleController,
  deleteBicycleController,
} from '../controllers/bicycle.controller';
import { authenticateJWT } from '../middlewares/auth.middleware';

const router = Router();

// Create a new bicycle
router.post('/', authenticateJWT, createBicycleController);

// Get all bicycles
router.get('/', getAllBicyclesController);

// Get all bicycles id
router.get('/:id', getBicycleByIdController);

// Get all bicycles by user id
router.get('/user/:user_id', getAllBicyclesByUserIdController);

// Update a bicycle
router.put('/', authenticateJWT, updateBicycleController);

// Delete a bicycle
router.delete('/', authenticateJWT, deleteBicycleController);

export default router;
