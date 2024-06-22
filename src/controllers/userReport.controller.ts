import { Request, Response } from 'express';
import {
  getAllUserReports,
  createUserReport,
  updateUserReport,
  deleteUserReport,
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
