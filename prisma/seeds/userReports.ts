import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedUserReports() {
  await prisma.userReport.upsert({
    where: {
      id: 1, // The unique identifier for the userProfile
    },
    update: {},
    create: {
      user_id: 1, // Assuming user_id 1 exists
      bike_id: 1, // Assuming bike_id 1 exists
      start_datetime: new Date('2023-01-01T10:00:00Z'),
      end_datetime: null,
      lor_code: '01100310',
      gps: 'Latitude: 52.521992, Longitude: 13.413244',
      description: 'Reported bike theft in Alexanderplatz area.',
      created_at: new Date(), // Add the created_at field
      updated_at: new Date(), // Add the updated_at field
    },
  });
}
