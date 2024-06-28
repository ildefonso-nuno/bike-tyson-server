// src/controllers/authController.ts
import { Request, Response } from 'express';
import {
  registerUser,
  loginUser,
  generateResetCode,
  storeResetCode,
  sendResetCode,
} from '../services/auth.service';
import {
  verifyGoogleToken,
  findOrCreateUser,
  generateJwtToken,
} from '../services/googleAuth.service';
import { getUserByEmail } from '../services/user.service';

export const registerController = async (req: Request, res: Response) => {
  const { email, password, first_name, last_name } = req.body;

  try {
    const user = await registerUser(email, password, first_name, last_name);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { token } = await loginUser(email, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error });
  }
};

export const sendResetCodeController = async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Check if the email exists in the user database
  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(404).json({ message: 'Email not found' });
  }

  const resetCode = generateResetCode();
  await storeResetCode(email, resetCode);

  const result = await sendResetCode(email, resetCode);

  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(500).json({ message: result.message });
  }
};

export const googleAuth = async (req: Request, res: Response) => {
  const { token } = req.body;

  try {
    const payload = await verifyGoogleToken(token);

    if (!payload) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    const user = await findOrCreateUser(payload);

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const jwtToken = generateJwtToken(user);
    res.json({ token: jwtToken });
  } catch (error) {
    console.error('Error verifying Google token:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

export const googleCallback = (req: Request, res: Response) => {
  const user = req.user as any;
  res.redirect(`http://localhost:3000?token=${user.token}`);
};
