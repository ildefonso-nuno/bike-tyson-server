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
      address: '123 Main St',
      phone_number: '+1234567890',
      date_of_birth: new Date('1990-01-01'),
      profile_pic_url:
        'https://media.gettyimages.com/id/1304179356/de/foto/triathlon-m%C3%A4nnliche-athleten-training-auf-hell-violett-sonnenuntergang-hintergrund-kaukasisch.jpg?s=2048x2048&w=gi&k=20&c=p5JioaSEI_9BdLPRQcjvpW28gQeF2Pm31noTySSNgFM=',
      created_at: new Date(),
      updated_at: new Date(),
    },
  });
}
