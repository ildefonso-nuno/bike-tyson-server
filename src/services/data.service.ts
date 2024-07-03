import prisma from '../middlewares/prisma';
import {
  calculateTotalThefts,
  calculateTotalValue,
  calculateLORStats,
  addColorLevelsToLORStats,
} from '../helpers/data-analysis';

interface CacheEntry<T> {
  data: T;
  expiry: number;
}

const cache: { [key: string]: CacheEntry<any> } = {};
const CACHE_EXPIRY_TIME = 3600 * 1000 * 24; // 24 hour in milliseconds

const setCache = <T>(key: string, data: T): void => {
  const now = Date.now();
  cache[key] = { data, expiry: now + CACHE_EXPIRY_TIME };
};

const getCache = <T>(key: string): T | null => {
  const cachedData = cache[key];
  if (cachedData && cachedData.expiry > Date.now()) {
    return cachedData.data;
  }
  delete cache[key]; // Remove expired cache
  return null;
};

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
  const cacheKey = `policeReportAnalytics:${startDatetime.toISOString()}`;
  const cachedAnalytics = getCache<{
    total_thefts: number;
    total_value: number;
    lor_stats: ReturnType<typeof addColorLevelsToLORStats>;
  }>(cacheKey);

  if (cachedAnalytics) {
    return cachedAnalytics;
  }

  const policeReports = await fetchPoliceReports(startDatetime);
  const totalThefts = calculateTotalThefts(policeReports);
  const totalValue = calculateTotalValue(policeReports);
  const lorData = await fetchLORData(startDatetime);
  const lorStats = calculateLORStats(lorData, totalThefts);
  const lorStatsWithColorLevel = addColorLevelsToLORStats(lorStats);

  const analyticsResult = {
    total_thefts: totalThefts,
    total_value: totalValue,
    lor_stats: lorStatsWithColorLevel,
  };

  setCache(cacheKey, analyticsResult);

  return analyticsResult;
};
