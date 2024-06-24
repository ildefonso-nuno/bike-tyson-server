import prisma from '../middlewares/prisma';
import { subDays, format } from 'date-fns';

export const getPoliceReportAnalytics = async (startDatetime: Date) => {
  const policeReports = await prisma.policeReport.findMany({
    where: {
      start_datetime: {
        gte: startDatetime,
      },
    },
  });

  const totalThefts = policeReports.length;
  const totalValue = policeReports.reduce(
    (sum, report) => sum + report.value,
    0
  );

  const lorData = await prisma.berlinArea.findMany({
    where: {
      level: 4,
    },
    include: {
      _count: {
        select: { police_reports: true },
      },
      police_reports: {
        where: {
          start_datetime: {
            gte: startDatetime,
          },
        },
        select: {
          value: true,
          start_datetime: true,
        },
      },
    },
  });

  const lorStats = lorData.map((area) => {
    const numThefts = area._count.police_reports;
    const theftValue = area.police_reports.reduce(
      (sum, report) => sum + report.value,
      0
    );
    const theftsPerPopulation = area.population
      ? (numThefts / area.population) * 1000
      : 0;

    // Calculate thefts per day for the last 7 days
    const theftsByDay = Array.from({ length: 7 }, (_, i) => {
      const date = subDays(new Date(), i + 1);
      const dateString = format(date, 'yyyy-MM-dd');
      const count = area.police_reports.filter(
        (report) => format(report.start_datetime, 'yyyy-MM-dd') === dateString
      ).length;
      return { date: dateString, count };
    }).reverse();

    return {
      lor_code: area.lor_code,
      num_thefts: numThefts,
      theft_percentage: (numThefts / totalThefts) * 100,
      population: area.population,
      total_value: theftValue,
      thefts_per_population: theftsPerPopulation,
      thefts_by_day: theftsByDay,
    };
  });

  // Determine min and max theft_percentage for normalization
  const minTheftPercentage = Math.min(
    ...lorStats.map((stat) => stat.theft_percentage)
  );
  const maxTheftPercentage = Math.max(
    ...lorStats.map((stat) => stat.theft_percentage)
  );

  // Normalize theft_percentage to color level (0 to 10)
  const normalizeColorLevel = (
    value: number,
    min: number,
    max: number
  ): number => {
    return ((value - min) / (max - min)) * 10;
  };

  const lorStatsWithColorLevel = lorStats.map((stat) => ({
    ...stat,
    color_level: normalizeColorLevel(
      stat.theft_percentage * 1000,
      minTheftPercentage * 1000,
      maxTheftPercentage * 1000
    ),
  }));

  return {
    total_thefts: totalThefts,
    total_value: totalValue,
    lor_stats: lorStatsWithColorLevel,
  };
};
