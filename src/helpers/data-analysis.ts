import { subDays, format, getDay } from 'date-fns';

export function calculateTotalThefts(policeReports: any[]) {
  return policeReports.length;
}

export function calculateTotalValue(policeReports: any[]) {
  return policeReports.reduce((sum, report) => sum + report.value, 0);
}

export function calculateTheftsByDay(policeReports: any[], days: number = 5) {
  return Array.from({ length: days }, (_, i) => {
    const date = subDays(new Date(), i + 1); // Start from one day ago
    const dateString = format(date, 'yyyy-MM-dd');
    const count = policeReports.filter(
      (report) => format(report.start_datetime, 'yyyy-MM-dd') === dateString
    ).length;
    return { date: dateString, count };
  }).reverse();
}

export function calculateTheftsByDayOfWeek(policeReports: any[]) {
  const theftsByDayOfWeek = Array.from({ length: 7 }, () => 0);
  policeReports.forEach((report) => {
    const dayOfWeek = getDay(report.start_datetime);
    theftsByDayOfWeek[dayOfWeek]++;
  });
  return theftsByDayOfWeek;
}

export function calculateLORStats(lorData: any[], totalThefts: number) {
  return lorData.reduce((acc, area) => {
    const numThefts = area.police_reports.length;
    const theftValue = area.police_reports.reduce(
      (sum: any, report: any) => sum + report.value,
      0
    );
    const theftsPerPopulation = area.population
      ? (numThefts / area.population) * 1000
      : 0;

    const theftsByDay = calculateTheftsByDay(area.police_reports);
    const theftsByDayOfWeek = calculateTheftsByDayOfWeek(area.police_reports);

    acc[area.lor_code] = {
      lor_code: area.lor_code,
      num_thefts: numThefts,
      theft_percentage: (numThefts / totalThefts) * 100,
      population: area.population,
      total_value: theftValue,
      thefts_per_population: theftsPerPopulation,
      thefts_by_day: theftsByDay,
      thefts_by_day_of_week: theftsByDayOfWeek,
    };

    return acc;
  }, {} as Record<string, any>);
}

export function determineMinMaxTheftPercentage(lorStats: Record<string, any>) {
  const percentages = Object.values(lorStats).map(
    (stat) => stat.theft_percentage
  );
  return {
    min: Math.min(...percentages),
    max: Math.max(...percentages),
  };
}

export function normalizeColorLevel(
  value: number,
  min: number,
  max: number
): number {
  return ((value - min) / (max - min)) * 10;
}

export function addColorLevelsToLORStats(lorStats: Record<string, any>) {
  const { min, max } = determineMinMaxTheftPercentage(lorStats);
  return Object.keys(lorStats).reduce((acc, lor_code) => {
    acc[lor_code] = {
      ...lorStats[lor_code],
      color_level: normalizeColorLevel(
        lorStats[lor_code].theft_percentage,
        min,
        max
      ),
    };
    return acc;
  }, {} as Record<string, any>);
}
