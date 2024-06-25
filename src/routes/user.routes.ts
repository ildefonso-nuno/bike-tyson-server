import { Router } from 'express';
import {
  getUserController,
  updateUserController,
} from '../controllers/user.controller';
import { authenticateJWT } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', authenticateJWT, getUserController);
router.put('/', authenticateJWT, updateUserController);

export default router;
