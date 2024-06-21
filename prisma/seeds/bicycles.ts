import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedBicycles() {
  await prisma.bicycle.upsert({
    where: {
      id: 1,
    },
    update: {}, // No updates if the record already exists
    create: {
      user_id: 1,
      name: 'Mountain Bike',
      brand: 'Brand X',
      model: 'Model 123',
      type: 'Mountain',
      value: 599.99,
      frame_num: 'ABC123',
      frame_size: 'M',
      colour: 'Red',
      gender: 'Unisex',
      description: 'Great bike for off-road adventures.',
      photos_url: [
        'https://img.freepik.com/free-photo/white-bicycle-standing-park-morning-fitness-loneliness_1153-6768.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtuJa4Mo8H2P1GyLYJCg4Xbni117kjxyc9482n9j-mgezj0LqmkV64c_VJ_gh85KlPBY&usqp=CAU',
      ],
      owner: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
  });
}
