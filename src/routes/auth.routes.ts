// src/routes/authRoutes.ts
import { Router } from 'express';
import passport from 'passport';
import {
  registerController,
  loginController,
  sendResetCodeController,
  verifyResetCodeController,
  updatePasswordController,
  googleCallback,
  googleAuth,
} from '../controllers/auth.controller';

const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/send-reset-code', sendResetCodeController);
router.post('/verify-reset-code', verifyResetCodeController);
router.post('/update-password', updatePasswordController);

router.post('/google', googleAuth);
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  googleCallback
);

export default router;
