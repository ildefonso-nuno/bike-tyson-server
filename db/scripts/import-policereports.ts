import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function downloadCSV(url: string, downloadPath: string): Promise<void> {
  const writer = fs.createWriteStream(downloadPath);

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

async function deleteAllFilesInDirectory(directory: string): Promise<void> {
  const files = await fs.promises.readdir(directory);
  await Promise.all(
    files.map((file) => fs.promises.unlink(path.join(directory, file)))
  );
}

async function getLatestDate(): Promise<Date | null> {
  const latestReport = await prisma.policeReport.findFirst({
    orderBy: { created_at: 'desc' },
  });

  return latestReport ? latestReport.created_at : new Date('2020-01-01');
}

async function processCSVFile(csvPath: string): Promise<void> {
  const results: any[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        try {
          // Get the latest date from the DB
          const latestDate = await getLatestDate();

          for (const row of results) {
            const lor = row.LOR.trim();

            const createdDatetime = new Date(
              `${row.ANGELEGT_AM.split('.').reverse().join('-')}T00:00:00`
            );

            const startDatetime = new Date(
              `${row.TATZEIT_ANFANG_DATUM.split('.')
                .reverse()
                .join('-')}T${row.TATZEIT_ANFANG_STUNDE.padStart(2, '0')}:00:00`
            );

            const endDatetime = new Date(
              `${row.TATZEIT_ENDE_DATUM.split('.')
                .reverse()
                .join('-')}T${row.TATZEIT_ENDE_STUNDE.padStart(2, '0')}:00:00`
            );

            // Check if the trimmed LOR code exists in BerlinArea
            const berlinArea = await prisma.berlinArea.findUnique({
              where: { lor_code: lor },
            });

            if (!berlinArea) {
              console.error(`LOR code ${lor} not found in BerlinArea table.`);
              continue; // Skip this entry if LOR code doesn't exist
            }

            // Stop processing if the createdDatetime is older than the latest date from the DB
            if (latestDate && createdDatetime <= latestDate) {
              console.log(
                `Stopping further processing as the older reports were already inserted. latestDate: ${latestDate}`
              );
              break;
            }

            console.log(`Inserting police report with LOR code: ${lor}`);

            await prisma.policeReport.create({
              data: {
                start_datetime: startDatetime,
                end_datetime: endDatetime,
                lor_code: lor,
                value: parseFloat(row.SCHADENSHOEHE),
                type_bicycle: row.ART_DES_FAHRRADS,
                created_at: new Date(),
                updated_at: new Date(),
              },
            });
          }

          await prisma.$disconnect();
          console.log('Data inserted successfully');
          resolve();
        } catch (error) {
          reject(error);
        }
      });
  });
}

async function main() {
  const csvDirectory = './db/scripts/csv';
  const csvPath = path.join(csvDirectory, 'Fahrraddiebstahl.csv');
  const csvUrl =
    'https://www.polizei-berlin.eu/Fahrraddiebstahl/Fahrraddiebstahl.csv';

  // Delete all files from the ./csv folder
  await deleteAllFilesInDirectory(csvDirectory);

  // Download the CSV file
  await downloadCSV(csvUrl, csvPath);

  // Read and process the CSV file
  await processCSVFile(csvPath);
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
