import { Router } from 'express';
import {
  getAllUserReportsController,
  createUserReportController,
  updateUserReportController,
  deleteUserReportController,
  getUserReportByIdController,
  getUserReportByUserIdController,
  getUserReportsByDateController,
} from '../controllers/userReport.controller';

const router = Router();

// Create a new user report
router.post('/', createUserReportController);

// Get all user reports
router.get('/', getAllUserReportsController);

// Get user report by id
router.get('/:id', getUserReportByIdController);

// Get all user reports by user id
router.get('/:user_id', getUserReportByUserIdController);

// Get all user reports by date for a report type, either last stolen or last created
router.get('/last-reports', getUserReportsByDateController);

// Update a user report
router.put('/', updateUserReportController);

// Delete a user report
router.delete('/', deleteUserReportController);

export default router;
