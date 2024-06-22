import { Router } from 'express';
import {
  getAllBicyclesController,
  createBicycleController,
} from '../controllers/bicycle.controller';

const router = Router();

// Create a new bicycle
router.post('/', createBicycleController);

// Get all bicycles
router.get('/', getAllBicyclesController);

export default router;
