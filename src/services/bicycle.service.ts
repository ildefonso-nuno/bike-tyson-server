import prisma from '../prisma';
import { Bicycle } from '../models/bicycle.model';
import { Prisma } from '@prisma/client';

export const createBicycle = async (
  data: Prisma.BicycleCreateInput
): Promise<Bicycle> => {
  try {
    const newBicycle = await prisma.bicycle.create({
      data,
    });
    return newBicycle;
  } catch (error) {
    throw new Error('Error creating bicycle');
  }
};

export const getAllBicycles = async (): Promise<Bicycle[]> => {
  try {
    const bicycles = await prisma.bicycle.findMany();
    return bicycles;
  } catch (error) {
    throw new Error('Error fetching bicycles');
  }
};
