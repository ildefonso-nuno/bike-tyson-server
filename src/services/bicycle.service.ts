import prisma from '../prisma';
import { Bicycle } from '../models/bicycle.model';

export const getAllBicycles = async (): Promise<Bicycle[]> => {
  try {
    const bicycles = await prisma.bicycle.findMany();
    return bicycles;
  } catch (error) {
    throw new Error('Error fetching bicycles');
  }
};
