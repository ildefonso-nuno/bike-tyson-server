import prisma from '../middlewares/prisma';
import {
  calculateTotalThefts,
  calculateTotalValue,
  calculateLORStats,
  determineMinMaxTheftPercentage,
  addColorLevelsToLORStats,
} from '../helpers/data-analysis';

export async function fetchPoliceReports(startDatetime: Date) {
  return prisma.policeReport.findMany({
    where: {
      start_datetime: {
        gte: startDatetime,
      },
    },
  });
}

export async function fetchLORData(startDatetime: Date) {
  return prisma.berlinArea.findMany({
    where: {
      level: 4,
    },
    include: {
      _count: {
        select: { police_reports: true },
      },
      police_reports: {
        select: {
          value: true,
          start_datetime: true,
        },
        where: {
          start_datetime: {
            gte: startDatetime,
          },
        },
      },
    },
  });
}

export const getPoliceReportAnalytics = async (startDatetime: Date) => {
  const policeReports = await fetchPoliceReports(startDatetime);
  const totalThefts = calculateTotalThefts(policeReports);
  const totalValue = calculateTotalValue(policeReports);
  const lorData = await fetchLORData(startDatetime);
  const lorStats = calculateLORStats(lorData, totalThefts);

  const lorStatsWithColorLevel = addColorLevelsToLORStats(lorStats);

  return {
    total_thefts: totalThefts,
    total_value: totalValue,
    lor_stats: lorStatsWithColorLevel,
  };
};
