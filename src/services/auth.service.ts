// src/services/authService.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET!;

export const registerUser = async (
  email: string,
  password: string,
  first_name?: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        first_name,
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
