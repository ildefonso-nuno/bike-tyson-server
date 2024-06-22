import { Router } from 'express';
import {
  getAllUserReportsController,
  createUserReportController,
  updateUserReportController,
  deleteUserReportController,
} from '../controllers/userReport.controller';

const router = Router();

// Create a new user report
router.post('/', createUserReportController);

// Get all user reports
router.get('/', getAllUserReportsController);

// Update a user report
router.put('/', updateUserReportController);

// Delete a user report
router.delete('/', deleteUserReportController);

export default router;
