import { Router } from 'express';
import { getProfileController } from '../controllers/user.controller';
import { authenticateJWT } from '../middlewares/auth.middleware';

const router = Router();

router.get('/profile', authenticateJWT, getProfileController);

export default router;
