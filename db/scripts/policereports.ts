import fs from 'fs';
import csv from 'csv-parser';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const results: any[] = [];

  fs.createReadStream('./csv/BerlinBikeThefts.csv') // Replace with the path to your CSV file
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      for (const row of results) {
        // Trim the last character from the LOR field
        const lor = row.LOR;

        // Check if the trimmed LOR code exists in BerlinArea
        const berlinArea = await prisma.berlinArea.findUnique({
          where: {
            lor_code: lor,
          },
        });

        if (!berlinArea) {
          console.error(`LOR code ${lor} not found in BerlinArea table.`);
          // continue; // Skip this entry if LOR code doesn't exist
        }

        console.log(`Inserting police report with LOR code: ${lor}`);

        await prisma.policeReport.create({
          data: {
            start_datetime: new Date(
              `${row.TATZEIT_ANFANG_DATUM.split('.')
                .reverse()
                .join('-')}T${row.TATZEIT_ANFANG_STUNDE.padStart(2, '0')}:00:00`
            ),
            end_datetime: new Date(
              `${row.TATZEIT_ENDE_DATUM.split('.')
                .reverse()
                .join('-')}T${row.TATZEIT_ENDE_STUNDE.padStart(2, '0')}:00:00`
            ),
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
    });
}

main().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
