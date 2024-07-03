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
import { authenticateJWT } from '../middlewares/auth.middleware';

const router = Router();

// Create a new user report
router.post('/', authenticateJWT, createUserReportController);

// Get all user reports
router.get('/', getAllUserReportsController);

// Get user report by id
router.get('/:id', getUserReportByIdController);

// Get all user reports by user id
router.get('/user/:userId', getUserReportByUserIdController);

// Get all user reports by date for a report type, either last stolen or last created
router.get('/last-reports/:type/:date', getUserReportsByDateController);

// Update a user report
router.put('/', authenticateJWT, updateUserReportController);

// Delete a user report
router.delete('/', authenticateJWT, deleteUserReportController);

export default router;
