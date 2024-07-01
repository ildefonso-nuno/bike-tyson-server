import prisma from '../middlewares/prisma';
import { UserReport, UserReportWithLatLng } from '../models/userReport.model';
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
    const reports = await prisma.userReport.findMany({
      include: { bicycle: true },
    });
    return reports;
  } catch (error) {
    throw new Error('Error fetching reports');
  }
};

export const getUserReportById = async (
  id: number
): Promise<UserReport | null> => {
  return prisma.userReport.findUnique({
    where: { id },
    include: { bicycle: true },
  });
};

export const getUserReportByUserId = async (
  user_id: number
): Promise<UserReport[] | null> => {
  return prisma.userReport.findMany({
    where: { user_id: user_id },
    include: { bicycle: true },
  });
};

export const getUserReportByEndDateTime = async (
  end_datetime: Date
): Promise<UserReportWithLatLng[]> => {
  const reports = await prisma.userReport.findMany({
    where: {
      end_datetime: {
        gte: end_datetime, // greater than or equal to end
      },
    },
    include: { bicycle: true },
  });

  return reports.map((report) => {
    let lat: number = 0;
    let lng: number = 0;

    if (report.gps) {
      const match = report.gps.match(
        /Latitude:\s*([\d.]+),\s*Longitude:\s*([\d.]+)/
      );
      if (match) {
        lat = parseFloat(match[1]);
        lng = parseFloat(match[2]);
      }
    }

    return {
      ...report,
      lat,
      lng,
    };
  });
};

export const getUserReportByCreatedDate = async (
  created_at: Date
): Promise<UserReportWithLatLng[]> => {
  const reports = await prisma.userReport.findMany({
    where: {
      created_at: {
        gte: created_at, // greater than or equal to end
      },
    },
    include: { bicycle: true },
  });

  return reports.map((report) => {
    let lat: number = 0;
    let lng: number = 0;

    if (report.gps) {
      const match = report.gps.match(
        /Latitude:\s*([\d.]+),\s*Longitude:\s*([\d.]+)/
      );
      if (match) {
        lat = parseFloat(match[1]);
        lng = parseFloat(match[2]);
      }
    }

    return {
      ...report,
      lat,
      lng,
    };
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
