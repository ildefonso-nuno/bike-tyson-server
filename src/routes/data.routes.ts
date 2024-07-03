import { Router } from 'express';
import { getPoliceReportData } from '../controllers/data.controller';

const router = Router();

router.get('/police-reports', getPoliceReportData);

export default router;
