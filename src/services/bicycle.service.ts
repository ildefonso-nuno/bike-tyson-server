import prisma from '../middlewares/prisma';
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

export const getBicycleById = async (id: number): Promise<Bicycle[]> => {
  try {
    const bicycles = await prisma.bicycle.findMany({
      where: { id },
    });
    return bicycles;
  } catch (error) {
    throw new Error('Error fetching bicycle');
  }
};

export const getAllBicyclesByUserId = async (
  user_id: number
): Promise<Bicycle[]> => {
  try {
    const bicycles = await prisma.bicycle.findMany({
      where: { user_id },
      include: { reports: true },
    });
    return bicycles;
  } catch (error) {
    throw new Error('Error fetching bicycles');
  }
};

export const updateBicycle = async (
  id: number,
  data: Prisma.BicycleUpdateInput
) => {
  try {
    const updatedBicycle = await prisma.bicycle.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date(),
      },
    });
    return updatedBicycle;
  } catch (error) {
    throw new Error('Error updating bicycle');
  }
};

export const deleteBicycle = async (id: number) => {
  try {
    await prisma.bicycle.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Error deleting bicycle');
  }
};
