import { PrismaClient } from '@prisma/client';
import { seedUsers } from './users';
import { seedUserProfiles } from './userProfiles';
import { seedBicycles } from './bicycles';
import { seedBerlinAreas } from './berlinAreas';
import { seedUserReports } from './userReports';

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(async () => {
    await seedUsers();
    await seedUserProfiles();
    await seedBicycles();
    await seedBerlinAreas();
    await seedUserReports();
  });
}

main()
  .then(() => {
    console.log('Data seeded successfully');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
