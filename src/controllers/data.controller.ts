import { Request, Response } from 'express';
import { getPoliceReportAnalytics } from '../services/data.service';
export const getPoliceReportData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { start_datetime } = req.query;

    if (!start_datetime) {
      res
        .status(400)
        .json({ error: 'start_datetime query parameter is required' });
      return;
    }

    const data = await getPoliceReportAnalytics(
      new Date(start_datetime as string)
    );
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching police report data:', error);
    res.status(500).json({ error: 'Failed to fetch police report data' });
  }
};
