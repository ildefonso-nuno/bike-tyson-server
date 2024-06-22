import { Router } from 'express';
import { getAllBicyclesController } from '../controllers/bicycle.controller';

const router = Router();

// Get all bicycles
router.get('/', getAllBicyclesController);

export default router;
