// src/services/authService.ts
import prisma from '../middlewares/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import courier from '../configs/courier.config';
import { addMinutes, isAfter } from 'date-fns';

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
  const message = {
    message: {
      to: {
        email: email,
      },
      content: {
        title: 'Your Password Reset Code',
        body: `Your password reset code is: ${resetCode}`,
      },
    },
  };

  try {
    const result = await courier.send(message);
    console.log('Email sent:', result);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email');
  }
};

export const storeResetCode = async (email: string, code: string) => {
  const expiresAt = addMinutes(new Date(), 15);

  await prisma.resetCode.create({
    data: {
      email,
      code,
      expiresAt,
    },
  });
};

export const verifyResetCode = async (email: string, code: string) => {
  const resetCode = await prisma.resetCode.findFirst({
    where: {
      email,
      code,
    },
  });

  if (!resetCode) {
    throw new Error('Invalid reset code');
  }

  const now = new Date();

  if (isAfter(now, resetCode.expiresAt)) {
    throw new Error('Reset code has expired');
  } else {
    return true;
  }
};

export const updatePassword = async (
  email: string,
  code: string,
  password: string
) => {
  const resetCode = await prisma.resetCode.findFirst({
    where: {
      email,
      code,
    },
  });

  if (!resetCode) {
    throw new Error('Invalid reset code');
  }

  const now = new Date();
  if (isAfter(now, resetCode.expiresAt)) {
    throw new Error('Reset code has expired');
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Update the user's password
  await prisma.user.update({
    where: { email },
    data: { password: hashedPassword },
  });

  // Delete the reset code after successful password update
  await prisma.resetCode.delete({
    where: { id: resetCode.id },
  });

  return true;
};
