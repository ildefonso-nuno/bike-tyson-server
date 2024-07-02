import { Prisma, PrismaClient } from '@prisma/client';
import { seedUsers } from './users';
import { seedBicycles } from './bicycles';
import { seedBerlinAreas } from './berlinAreas';
import { seedUserReports } from './userReports';

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction(
    async () => {
      await seedUsers();
    },
    {
      maxWait: 100000, // default: 2000
      timeout: 150000, // default: 5000
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable, // optional, default defined by database configuration
    }
  );
  await prisma.$transaction(
    async () => {
      await seedBicycles();
    },
    {
      maxWait: 100000, // default: 2000
      timeout: 150000, // default: 5000
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable, // optional, default defined by database configuration
    }
  );
  await prisma.$transaction(
    async () => {
      await seedBerlinAreas();
    },
    {
      maxWait: 100000, // default: 2000
      timeout: 150000, // default: 5000
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable, // optional, default defined by database configuration
    }
  );
  await prisma.$transaction(
    async () => {
      await seedUserReports();
    },
    {
      maxWait: 100000, // default: 2000
      timeout: 150000, // default: 5000
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable, // optional, default defined by database configuration
    }
  );
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
