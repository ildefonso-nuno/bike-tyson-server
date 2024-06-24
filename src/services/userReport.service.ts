import prisma from '../middlewares/prisma';
import { UserReport } from '../models/userReport.model';
import { Prisma } from '@prisma/client';

export const createUserReport = async (
  data: Prisma.UserReportCreateInput
): Promise<UserReport> => {
  try {
    const newReport = await prisma.userReport.create({
      data,
    });
    return newReport;
  } catch (error) {
    throw new Error('Error creating user report');
  }
};

export const getAllUserReports = async (): Promise<UserReport[]> => {
  try {
    const reports = await prisma.userReport.findMany();
    return reports;
  } catch (error) {
    throw new Error('Error fetching reports');
  }
};

export const getUserReportById = async (id: number): Promise<UserReport | null> => {
  return prisma.userReport.findUnique({
    where: {id}
  });
};

export const updateUserReport = async (
  id: number,
  data: Prisma.UserReportUpdateInput
) => {
  try {
    const updatedReport = await prisma.userReport.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date(),
      },
    });
    return updatedReport;
  } catch (error) {
    throw new Error('Error updating user report');
  }
};

export const deleteUserReport = async (id: number) => {
  try {
    await prisma.userReport.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Error deleting user report');
  }
};
