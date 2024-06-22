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
