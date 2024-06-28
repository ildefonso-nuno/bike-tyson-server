// src/services/authService.ts
import prisma from '../middlewares/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { createTransporter } from '../configs/nodemail.config';

const JWT_SECRET = process.env.JWT_SECRET!;

export const registerUser = async (
  email: string,
  password: string,
  first_name?: string,
  last_name?: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        first_name,
        last_name,
      },
    });
    return user;
  } catch (error) {
    throw new Error('User already exists');
  }
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (
    user &&
    user.password &&
    (await bcrypt.compare(password, user.password))
  ) {
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: '1h',
    });
    return { token };
  } else {
    throw new Error('Invalid credentials');
  }
};

export const generateResetCode = () => {
  return crypto.randomBytes(3).toString('hex'); // Generate a 6-digit hex code
};

export const sendResetCode = async (email: string, resetCode: string) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Your Password Reset Code',
    text: `Your password reset code is: ${resetCode}`,
  };

  try {
    const transporter = await createTransporter();
    console.log('Sending mail with options:', mailOptions);
    const result = await transporter.sendMail(mailOptions);
    console.log('Mail sent:', result);
    return { success: true, message: 'Reset code sent' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send reset code' };
  }
};

export const storeResetCode = async (email: string, code: string) => {
  await prisma.resetCode.create({
    data: {
      email,
      code,
    },
  });
};
