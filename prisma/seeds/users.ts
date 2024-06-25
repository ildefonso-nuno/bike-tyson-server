import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedUsers() {
  await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      google_id: 'auth0|123456',
      email: 'user@example.com',
      first_name: 'John',
      last_name: 'Doe',
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      google_id: 'auth0_id_2',
      email: 'user2@example.com',
      first_name: 'Jane',
      last_name: 'Smith',
      created_at: new Date(),
      updated_at: new Date(),
    },
  });
}
