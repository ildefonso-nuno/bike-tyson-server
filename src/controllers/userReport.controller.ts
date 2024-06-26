import { Request, Response } from 'express';
import {
  getAllUserReports,
  createUserReport,
  updateUserReport,
  deleteUserReport,
  getUserReportById,
  getUserReportByUserId,
  getUserReportByEndDateTime,
  getUserReportByCreatedDate,
} from '../services/userReport.service';

export const createUserReportController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newReport = await createUserReport(req.body);
    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user report' });
  }
};

export const getAllUserReportsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const reports = await getAllUserReports();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user reports' });
  }
};

export const getUserReportByIdController = async (
    req: Request,
    res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const reports = await getUserReportById(Number(id));
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user report by id' });
  }
};

export const getUserReportByUserIdController = async (
    req: Request,
    res: Response
): Promise<void> => {
  const { userId } = req.params;
  try {
    const reports = await getUserReportByUserId(Number(userId));
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user report by user id' });
  }
};

export const getUserReportsByDateController = async (
    req: Request,
    res: Response
): Promise<void> => {
  const {type, date } = req.params;
  try {
    if (type === 'last stolen') {
      const reports = await getUserReportByEndDateTime(new Date(date));
      res.status(200).json(reports);
    } else if (type === 'last created') {
      const reports = await getUserReportByCreatedDate(new Date(date));
      res.status(200).json(reports);
    }
    else {
      res.status(400).json({ error: 'Invalid report type. Please provide either "last stolen" or "last created".' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user report by date range' });
  }
};

export const updateUserReportController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, ...updateData } = req.body;
    const updatedReport = await updateUserReport(id, updateData);
    res.status(200).json(updatedReport);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user report' });
  }
};

export const deleteUserReportController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.body;
    await deleteUserReport(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user report' });
  }
};
