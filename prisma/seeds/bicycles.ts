import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedBicycles() {
  const bicycleData = [
      {
        id: 1,
        user_id: 16,
        name: 'Gravel Bike',
        brand: 'Scott',
        model: 'Speedster Gravel 30',
        type: 'Gravel',
        value: 1299.99,
        frame_num: 'SCOTT45615',
        frame_size: 'M',
        colour: 'Yellow',
        gender: 'Male',
        description: 'Ideal for gravel and mixed terrain.',
        owner: true,
        photos_url: [
          'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884260.jpg?semt=ais_user_ai_gen'
        ]
      },
          {
            id: 2,
            user_id: 28,
            name: 'Mountain Bike',
            brand: 'Trek',
            model: 'Marlin 7',
            type: 'Mountain',
            value: 899.99,
            frame_num: 'TREK12329',
            frame_size: 'F',
            colour: 'Blue',
            gender: 'Female',
            description: 'Great for off-road trails and rugged terrain.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884272.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 3,
            user_id: 49,
            name: 'Road Bike',
            brand: 'Specialized',
            model: 'Allez Sport',
            type: 'Road',
            value: 999.99,
            frame_num: 'SPECIALIZED789340',
            frame_size: 'M',
            colour: 'Red',
            gender: 'Male',
            description: 'Designed for speed and long-distance rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884266.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 4,
            user_id: 92,
            name: 'City Bike',
            brand: 'Giant',
            model: 'Escape 3',
            type: 'City',
            value: 449.99,
            frame_num: 'GIANT321478',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Perfect for urban commuting and leisurely rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/close-up-bicycle-details-parts_23-2150834356.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 5,
            user_id: 57,
            name: 'Electric Bike',
            brand: 'Cannondale',
            model: 'Quick Neo EQ',
            type: 'Electric',
            value: 2499.99,
            frame_num: 'CANNONDALE654535',
            frame_size: 'M',
            colour: 'Silver',
            gender: 'Male',
            description: 'Assists with pedaling and ideal for longer distances.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834280.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 6,
            user_id: 72,
            name: 'Folding Bike',
            brand: 'Brompton',
            model: 'S6L',
            type: 'Folding',
            value: 1499.99,
            frame_num: 'BROMPTON987681',
            frame_size: 'F',
            colour: 'White',
            gender: 'Female',
            description: 'Convenient for city dwellers with limited storage space.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884254.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 7,
            user_id: 28,
            name: 'Hybrid Bike',
            brand: 'Schwinn',
            model: 'Discover Hybrid Bike',
            type: 'Hybrid',
            value: 349.99,
            frame_num: 'SCHWINN852718',
            frame_size: 'F',
            colour: 'Teal',
            gender: 'Female',
            description: 'Versatile for both city streets and light trails.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/bicycle-with-basket-front-is-parked-against-wall_1340-38311.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 8,
            user_id: 34,
            name: 'Gravel Bike',
            brand: 'GT',
            model: 'Grade Elite',
            type: 'Gravel',
            value: 1599.99,
            frame_num: 'GT741884',
            frame_size: 'M',
            colour: 'Orange',
            gender: 'Male',
            description: 'Built for rough gravel roads and all-terrain exploration.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884248.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 9,
            user_id: 57,
            name: 'Mountain Bike',
            brand: 'Santa Cruz',
            model: 'Tallboy D',
            type: 'Mountain',
            value: 2999.99,
            frame_num: 'SANTACRUZ369910',
            frame_size: 'M',
            colour: 'Green',
            gender: 'Male',
            description: 'High-performance bike for challenging mountain trails.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884252.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 10,
            user_id: 49,
            name: 'Road Bike',
            brand: 'Cervelo',
            model: 'R3 Disc',
            type: 'Road',
            value: 3499.99,
            frame_num: 'CERVELO159105',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Engineered for aerodynamics and competitive road racing.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/red-bike-is-parked-front-mountain-landscape_1340-38313.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 11,
            user_id: 2,
            name: 'City Bike',
            brand: 'Raleigh',
            model: 'Carlton Mixte 8',
            type: 'City',
            value: 599.99,
            frame_num: 'RALEIGH7531126',
            frame_size: 'M',
            colour: 'Blue',
            gender: 'Male',
            description: 'Classic design for comfortable city cruising and commuting.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884292.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 12,
            user_id: 1,
            name: 'Electric Bike',
            brand: 'Haibike',
            model: 'Sduro HardSeven 1.0',
            type: 'Electric',
            value: 2799.99,
            frame_num: 'HAIBIKE246125',
            frame_size: 'F',
            colour: 'Purple',
            gender: 'Female',
            description: 'Powerful electric assistance for off-road adventures.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880319.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 13,
            user_id: 89,
            name: 'Folding Bike',
            brand: 'Dahon',
            model: 'Mariner D8',
            type: 'Folding',
            value: 699.99,
            frame_num: 'DAHON4681340',
            frame_size: 'M',
            colour: 'Red',
            gender: 'Male',
            description: 'Compact and portable for easy storage and transportation.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880330.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 14,
            user_id: 45,
            name: 'Hybrid Bike',
            brand: 'Marin',
            model: 'Larkspur 2',
            type: 'Hybrid',
            value: 499.99,
            frame_num: 'MARIN8521497',
            frame_size: 'F',
            colour: 'Gray',
            gender: 'Female',
            description: 'Smooth ride for urban commutes and leisurely weekend rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880323.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 15,
            user_id: 54,
            name: 'Gravel Bike',
            brand: 'Orbea',
            model: 'Terra H40',
            type: 'Gravel',
            value: 1899.99,
            frame_num: 'ORBEA3571574',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Versatile bike for gravel racing and long-distance adventures.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834260.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 16,
            user_id: 68,
            name: 'Mountain Bike',
            brand: 'Yeti',
            model: 'SB130',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'YETI9631663',
            frame_size: 'F',
            colour: 'Turquoise',
            gender: 'Female',
            description: 'High-end performance bike for technical mountain trails.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884322.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 17,
            user_id: 3,
            name: 'Road Bike',
            brand: 'Pinarello',
            model: 'Dogma F12',
            type: 'Road',
            value: 9999.99,
            frame_num: 'PINARELLO7411710',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Top-of-the-line road bike for professional racing and enthusiasts.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/close-up-bike-nature_23-2150814860.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 18,
            user_id: 89,
            name: 'City Bike',
            brand: 'Bianchi',
            model: 'Cortina Dama',
            type: 'City',
            value: 799.99,
            frame_num: 'BIANCHI2581881',
            frame_size: 'F',
            colour: 'Pink',
            gender: 'Female',
            description: 'Stylish and comfortable bike for city commuting and casual rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884260.jpg?semt=ais_user_ai_gen'
            ]
          },
          {
            id: 19,
            user_id: 102,
            name: 'Electric Bike',
            brand: 'Rad Power Bikes',
            model: 'RadRover 5',
            type: 'Electric',
            value: 1499.99,
            frame_num: 'RADPOWER3691917',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Electric fat tire bike for all-terrain exploration and commuting.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884272.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 20,
            user_id: 69,
            name: 'Folding Bike',
            brand: 'Tern',
            model: 'Link D8',
            type: 'Folding',
            value: 899.99,
            frame_num: 'TERN6542032',
            frame_size: 'F',
            colour: 'Blue',
            gender: 'Female',
            description: 'Compact folding bike for urban mobility and easy storage.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884266.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 21,
            user_id: 49,
            name: 'Hybrid Bike',
            brand: 'Co-op Cycles',
            model: 'CTY 1.1 Bike',
            type: 'Hybrid',
            value: 599.99,
            frame_num: 'COOPCYCLES1472154',
            frame_size: 'M',
            colour: 'Green',
            gender: 'Male',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/close-up-bicycle-details-parts_23-2150834356.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 22,
            user_id: 36,
            name: 'Gravel Bike',
            brand: 'Salsa',
            model: 'Journeyman Claris 650',
            type: 'Gravel',
            value: 1099.99,
            frame_num: 'SALSA8522291',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'Affordable gravel bike for entry-level riders and adventure seekers.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834280.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 23,
            user_id: 103,
            name: 'Mountain Bike',
            brand: 'Scott',
            model: 'Genius 940',
            type: 'Mountain',
            value: 3499.99,
            frame_num: 'SCOTT3692397',
            frame_size: 'M',
            colour: 'Red',
            gender: 'Male',
            description: 'Full-suspension mountain bike for technical descents and trail riding.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884254.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 24,
            user_id: 84,
            name: 'Road Bike',
            brand: 'Giant',
            model: 'Defy Advanced 2',
            type: 'Road',
            value: 1999.99,
            frame_num: 'GIANT7412412',
            frame_size: 'F',
            colour: 'Gray',
            gender: 'Female',
            description: 'Endurance road bike for long-distance comfort and performance.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/bicycle-with-basket-front-is-parked-against-wall_1340-38311.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 25,
            user_id: 104,
            name: 'City Bike',
            brand: 'Sixthreezero',
            model: 'Explore Your Range',
            type: 'City',
            value: 349.99,
            frame_num: 'SIXTHREEZERO2582517',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Comfortable city bike for leisurely rides and exploring urban areas.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884248.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 26,
            user_id: 31,
            name: 'Electric Bike',
            brand: 'Juiced Bikes',
            model: 'CrossCurrent X',
            type: 'Electric',
            value: 2499.99,
            frame_num: 'JUICEDBIKES9632617',
            frame_size: 'F',
            colour: 'White',
            gender: 'Female',
            description: 'Powerful electric bike for commuting and long-range rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884252.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 27,
            user_id: 97,
            name: 'Folding Bike',
            brand: 'Brompton',
            model: 'M6L Black Edition',
            type: 'Folding',
            value: 1999.99,
            frame_num: 'BROMPTON3572739',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Premium folding bike with sleek design and compact foldability.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/red-bike-is-parked-front-mountain-landscape_1340-38313.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 28,
            user_id: 78,
            name: 'Hybrid Bike',
            brand: 'Cannondale',
            model: 'Quick CX 3',
            type: 'Hybrid',
            value: 899.99,
            frame_num: 'CANNONDALE6542843',
            frame_size: 'F',
            colour: 'Green',
            gender: 'Female',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884292.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 29,
            user_id: 33,
            name: 'Gravel Bike',
            brand: 'Specialized',
            model: 'Diverge Base E5',
            type: 'Gravel',
            value: 1199.99,
            frame_num: 'SPECIALIZED8522920',
            frame_size: 'M',
            colour: 'Blue',
            gender: 'Male',
            description: 'Adventure-ready gravel bike for exploring diverse terrain.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880319.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 30,
            user_id: 88,
            name: 'Mountain Bike',
            brand: 'Trek',
            model: 'Remedy 9.8',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'TREK3693098',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'High-performance mountain bike for aggressive trail riding and enduro racing.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880330.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 31,
            user_id: 61,
            name: 'Road Bike',
            brand: 'Cervelo',
            model: 'S5 Disc',
            type: 'Road',
            value: 8999.99,
            frame_num: 'CERVELO159312',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Aero road bike for speed and performance in competitive racing.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880323.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 32,
            user_id: 57,
            name: 'City Bike',
            brand: 'Raleigh',
            model: 'Carlton Mixte 8',
            type: 'City',
            value: 599.99,
            frame_num: 'RALEIGH7533219',
            frame_size: 'F',
            colour: 'Red',
            gender: 'Female',
            description: 'Stylish and comfortable bike for city commuting and casual rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834260.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 33,
            user_id: 61,
            name: 'Electric Bike',
            brand: 'Haibike',
            model: 'Sduro HardSeven 1.0',
            type: 'Electric',
            value: 2799.99,
            frame_num: 'HAIBIKE2463396',
            frame_size: 'M',
            colour: 'Blue',
            gender: 'Male',
            description: 'Powerful electric assistance for off-road adventures.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884322.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 34,
            user_id: 62,
            name: 'Folding Bike',
            brand: 'Dahon',
            model: 'Mariner D8',
            type: 'Folding',
            value: 699.99,
            frame_num: 'DAHON468345',
            frame_size: 'F',
            colour: 'White',
            gender: 'Female',
            description: 'Compact and portable for easy storage and transportation.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/close-up-bike-nature_23-2150814860.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 35,
            user_id: 92,
            name: 'Hybrid Bike',
            brand: 'Marin',
            model: 'Larkspur 2',
            type: 'Hybrid',
            value: 499.99,
            frame_num: 'MARIN8523563',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Smooth ride for urban commutes and leisurely weekend rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884260.jpg?semt=ais_user_ai_gen'
            ]
          },
          {
            id: 36,
            user_id: 93,
            name: 'Gravel Bike',
            brand: 'Orbea',
            model: 'Terra H40',
            type: 'Gravel',
            value: 1899.99,
            frame_num: 'ORBEA3573643',
            frame_size: 'F',
            colour: 'Green',
            gender: 'Female',
            description: 'Versatile bike for gravel racing and long-distance adventures.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884272.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 37,
            user_id: 96,
            name: 'Mountain Bike',
            brand: 'Yeti',
            model: 'SB130',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'YETI9633787',
            frame_size: 'M',
            colour: 'Gray',
            gender: 'Male',
            description: 'High-end performance bike for technical mountain trails.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884266.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 38,
            user_id: 84,
            name: 'Road Bike',
            brand: 'Pinarello',
            model: 'Dogma F12',
            type: 'Road',
            value: 9999.99,
            frame_num: 'PINARELLO7413862',
            frame_size: 'F',
            colour: 'Blue',
            gender: 'Female',
            description: 'Top-of-the-line road bike for professional racing and enthusiasts.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/close-up-bicycle-details-parts_23-2150834356.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 39,
            user_id: 67,
            name: 'City Bike',
            brand: 'Bianchi',
            model: 'Cortina Dama',
            type: 'City',
            value: 799.99,
            frame_num: 'BIANCHI2583965',
            frame_size: 'M',
            colour: 'Red',
            gender: 'Male',
            description: 'Stylish and comfortable bike for city commuting and casual rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834280.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 40,
            user_id: 91,
            name: 'Electric Bike',
            brand: 'Rad Power Bikes',
            model: 'RadRover 5',
            type: 'Electric',
            value: 1499.99,
            frame_num: 'RADPOWER3694079',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'Electric fat tire bike for all-terrain exploration and commuting.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884254.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 41,
            user_id: 6,
            name: 'Folding Bike',
            brand: 'Tern',
            model: 'Link D8',
            type: 'Folding',
            value: 899.99,
            frame_num: 'TERN6544166',
            frame_size: 'M',
            colour: 'Green',
            gender: 'Male',
            description: 'Compact folding bike for urban mobility and easy storage.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/bicycle-with-basket-front-is-parked-against-wall_1340-38311.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 42,
            user_id: 14,
            name: 'Hybrid Bike',
            brand: 'Co-op Cycles',
            model: 'CTY 1.1 Bike',
            type: 'Hybrid',
            value: 599.99,
            frame_num: 'COOPCYCLES1474237',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884248.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 43,
            user_id: 46,
            name: 'Gravel Bike',
            brand: 'Salsa',
            model: 'Journeyman Claris 650',
            type: 'Gravel',
            value: 1099.99,
            frame_num: 'SALSA8524381',
            frame_size: 'M',
            colour: 'Orange',
            gender: 'Male',
            description: 'Affordable gravel bike for entry-level riders and adventure seekers.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884252.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 44,
            user_id: 59,
            name: 'Mountain Bike',
            brand: 'Scott',
            model: 'Genius 940',
            type: 'Mountain',
            value: 3499.99,
            frame_num: 'SCOTT3694428',
            frame_size: 'F',
            colour: 'Blue',
            gender: 'Female',
            description: 'Full-suspension mountain bike for technical descents and trail riding.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/red-bike-is-parked-front-mountain-landscape_1340-38313.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 45,
            user_id: 21,
            name: 'Road Bike',
            brand: 'Giant',
            model: 'Defy Advanced 2',
            type: 'Road',
            value: 1999.99,
            frame_num: 'GIANT7414546',
            frame_size: 'M',
            colour: 'Green',
            gender: 'Male',
            description: 'Endurance road bike for long-distance comfort and performance.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884292.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 46,
            user_id: 40,
            name: 'City Bike',
            brand: 'Sixthreezero',
            model: 'Explore Your Range',
            type: 'City',
            value: 349.99,
            frame_num: 'SIXTHREEZERO2584638',
            frame_size: 'F',
            colour: 'Purple',
            gender: 'Female',
            description: 'Comfortable city bike for leisurely rides and exploring urban areas.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880319.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 47,
            user_id: 35,
            name: 'Electric Bike',
            brand: 'Juiced Bikes',
            model: 'CrossCurrent X',
            type: 'Electric',
            value: 2499.99,
            frame_num: 'JUICEDBIKES9634770',
            frame_size: 'M',
            colour: 'Red',
            gender: 'Male',
            description: 'Powerful electric bike for commuting and long-range rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880330.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 48,
            user_id: 49,
            name: 'Folding Bike',
            brand: 'Brompton',
            model: 'M6L Black Edition',
            type: 'Folding',
            value: 1999.99,
            frame_num: 'BROMPTON3574880',
            frame_size: 'F',
            colour: 'Gray',
            gender: 'Female',
            description: 'Premium folding bike with sleek design and compact foldability.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880323.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 49,
            user_id: 77,
            name: 'Hybrid Bike',
            brand: 'Cannondale',
            model: 'Quick CX 3',
            type: 'Hybrid',
            value: 899.99,
            frame_num: 'CANNONDALE6544928',
            frame_size: 'M',
            colour: 'Teal',
            gender: 'Male',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834260.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 50,
            user_id: 70,
            name: 'Gravel Bike',
            brand: 'Specialized',
            model: 'Diverge Base E5',
            type: 'Gravel',
            value: 1199.99,
            frame_num: 'SPECIALIZED8525031',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Adventure-ready gravel bike for exploring diverse terrain.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884322.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 51,
            user_id: 43,
            name: 'Mountain Bike',
            brand: 'Trek',
            model: 'Remedy 9.8',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'TREK3695123',
            frame_size: 'M',
            colour: 'Blue',
            gender: 'Male',
            description: 'High-performance mountain bike for aggressive trail riding and enduro racing.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/close-up-bike-nature_23-2150814860.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 52,
            user_id: 26,
            name: 'Road Bike',
            brand: 'Cervelo',
            model: 'S5 Disc',
            type: 'Road',
            value: 8999.99,
            frame_num: 'CERVELO1595291',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'Aero road bike for speed and performance in competitive racing.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884260.jpg?semt=ais_user_ai_gen'
            ]
          },
          {
            id: 53,
            user_id: 104,
            name: 'City Bike',
            brand: 'Raleigh',
            model: 'Carlton Mixte 8',
            type: 'City',
            value: 599.99,
            frame_num: 'RALEIGH7535329',
            frame_size: 'M',
            colour: 'Green',
            gender: 'Male',
            description: 'Stylish and comfortable bike for city commuting and casual rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884272.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 54,
            user_id: 87,
            name: 'Electric Bike',
            brand: 'Haibike',
            model: 'Sduro HardSeven 1.0',
            type: 'Electric',
            value: 2799.99,
            frame_num: 'HAIBIKE2465431',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Powerful electric assistance for off-road adventures.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884266.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 55,
            user_id: 6,
            name: 'Folding Bike',
            brand: 'Dahon',
            model: 'Mariner D8',
            type: 'Folding',
            value: 699.99,
            frame_num: 'DAHON4685512',
            frame_size: 'M',
            colour: 'Red',
            gender: 'Male',
            description: 'Compact and portable for easy storage and transportation.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/close-up-bicycle-details-parts_23-2150834356.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 56,
            user_id: 64,
            name: 'Hybrid Bike',
            brand: 'Marin',
            model: 'Larkspur 2',
            type: 'Hybrid',
            value: 499.99,
            frame_num: 'MARIN8525638',
            frame_size: 'F',
            colour: 'White',
            gender: 'Female',
            description: 'Smooth ride for urban commutes and leisurely weekend rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834280.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 57,
            user_id: 62,
            name: 'Gravel Bike',
            brand: 'Orbea',
            model: 'Terra H40',
            type: 'Gravel',
            value: 1899.99,
            frame_num: 'ORBEA3575710',
            frame_size: 'M',
            colour: 'Gray',
            gender: 'Male',
            description: 'Versatile bike for gravel racing and long-distance adventures.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884254.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 58,
            user_id: 50,
            name: 'Mountain Bike',
            brand: 'Yeti',
            model: 'SB130',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'YETI9635862',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'High-end performance bike for technical mountain trails.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/bicycle-with-basket-front-is-parked-against-wall_1340-38311.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 59,
            user_id: 77,
            name: 'Road Bike',
            brand: 'Pinarello',
            model: 'Dogma F12',
            type: 'Road',
            value: 9999.99,
            frame_num: 'PINARELLO7415981',
            frame_size: 'M',
            colour: 'Green',
            gender: 'Male',
            description: 'Top-of-the-line road bike for professional racing and enthusiasts.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884248.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 60,
            user_id: 75,
            name: 'City Bike',
            brand: 'Bianchi',
            model: 'Cortina Dama',
            type: 'City',
            value: 799.99,
            frame_num: 'BIANCHI2586061',
            frame_size: 'F',
            colour: 'Blue',
            gender: 'Female',
            description: 'Stylish and comfortable bike for city commuting and casual rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884252.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 61,
            user_id: 18,
            name: 'Electric Bike',
            brand: 'Rad Power Bikes',
            model: 'RadRover 5',
            type: 'Electric',
            value: 1499.99,
            frame_num: 'RADPOWER3696185',
            frame_size: 'M',
            colour: 'Orange',
            gender: 'Male',
            description: 'Electric fat tire bike for all-terrain exploration and commuting.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/red-bike-is-parked-front-mountain-landscape_1340-38313.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 62,
            user_id: 40,
            name: 'Folding Bike',
            brand: 'Tern',
            model: 'Link D8',
            type: 'Folding',
            value: 899.99,
            frame_num: 'TERN6546273',
            frame_size: 'F',
            colour: 'Red',
            gender: 'Female',
            description: 'Compact folding bike for urban mobility and easy storage.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884292.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 63,
            user_id: 98,
            name: 'Hybrid Bike',
            brand: 'Co-op Cycles',
            model: 'CTY 1.1 Bike',
            type: 'Hybrid',
            value: 599.99,
            frame_num: 'COOPCYCLES1476376',
            frame_size: 'M',
            colour: 'Blue',
            gender: 'Male',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880319.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 64,
            user_id: 22,
            name: 'Gravel Bike',
            brand: 'Salsa',
            model: 'Journeyman Claris 650',
            type: 'Gravel',
            value: 1099.99,
            frame_num: 'SALSA8526452',
            frame_size: 'F',
            colour: 'Green',
            gender: 'Female',
            description: 'Affordable gravel bike for entry-level riders and adventure seekers.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880330.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 65,
            user_id: 4,
            name: 'Mountain Bike',
            brand: 'Scott',
            model: 'Genius 940',
            type: 'Mountain',
            value: 3499.99,
            frame_num: 'SCOTT3696565',
            frame_size: 'M',
            colour: 'Purple',
            gender: 'Male',
            description: 'Full-suspension mountain bike for technical descents and trail riding.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880323.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 66,
            user_id: 44,
            name: 'Road Bike',
            brand: 'Giant',
            model: 'Defy Advanced 2',
            type: 'Road',
            value: 1999.99,
            frame_num: 'GIANT7416677',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Endurance road bike for long-distance comfort and performance.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834260.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 67,
            user_id: 29,
            name: 'City Bike',
            brand: 'Sixthreezero',
            model: 'Explore Your Range',
            type: 'City',
            value: 349.99,
            frame_num: 'SIXTHREEZERO2586736',
            frame_size: 'M',
            colour: 'Gray',
            gender: 'Male',
            description: 'Comfortable city bike for leisurely rides and exploring urban areas.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884322.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 68,
            user_id: 89,
            name: 'Electric Bike',
            brand: 'Juiced Bikes',
            model: 'CrossCurrent X',
            type: 'Electric',
            value: 2499.99,
            frame_num: 'JUICEDBIKES9636849',
            frame_size: 'F',
            colour: 'Blue',
            gender: 'Female',
            description: 'Powerful electric bike for commuting and long-range rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/close-up-bike-nature_23-2150814860.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 69,
            user_id: 34,
            name: 'Folding Bike',
            brand: 'Brompton',
            model: 'M6L Black Edition',
            type: 'Folding',
            value: 1999.99,
            frame_num: 'BROMPTON3576944',
            frame_size: 'M',
            colour: 'Green',
            gender: 'Male',
            description: 'Premium folding bike with sleek design and compact foldability.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884260.jpg?semt=ais_user_ai_gen'
            ]
          },
          {
            id: 70,
            user_id: 17,
            name: 'Hybrid Bike',
            brand: 'Cannondale',
            model: 'Quick CX 3',
            type: 'Hybrid',
            value: 899.99,
            frame_num: 'CANNONDALE6547053',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884272.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 71,
            user_id: 1,
            name: 'Gravel Bike',
            brand: 'Specialized',
            model: 'Diverge Base E5',
            type: 'Gravel',
            value: 1199.99,
            frame_num: 'SPECIALIZED8527115',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Adventure-ready gravel bike for exploring diverse terrain.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884266.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 72,
            user_id: 102,
            name: 'Mountain Bike',
            brand: 'Trek',
            model: 'Remedy 9.8',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'TREK3697268',
            frame_size: 'F',
            colour: 'Green',
            gender: 'Female',
            description: 'High-performance mountain bike for aggressive trail riding and enduro racing.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/close-up-bicycle-details-parts_23-2150834356.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 73,
            user_id: 85,
            name: 'Road Bike',
            brand: 'Cervelo',
            model: 'S5 Disc',
            type: 'Road',
            value: 8999.99,
            frame_num: 'CERVELO1597392',
            frame_size: 'M',
            colour: 'Red',
            gender: 'Male',
            description: 'Aero road bike for speed and performance in competitive racing.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834280.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 74,
            user_id: 72,
            name: 'City Bike',
            brand: 'Raleigh',
            model: 'Carlton Mixte 8',
            type: 'City',
            value: 599.99,
            frame_num: 'RALEIGH7537464',
            frame_size: 'F',
            colour: 'Gray',
            gender: 'Female',
            description: 'Stylish and comfortable bike for city commuting and casual rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884254.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 75,
            user_id: 78,
            name: 'Electric Bike',
            brand: 'Haibike',
            model: 'Sduro HardSeven 1.0',
            type: 'Electric',
            value: 2799.99,
            frame_num: 'HAIBIKE2467579',
            frame_size: 'M',
            colour: 'Blue',
            gender: 'Male',
            description: 'Powerful electric assistance for off-road adventures.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/bicycle-with-basket-front-is-parked-against-wall_1340-38311.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 76,
            user_id: 56,
            name: 'Folding Bike',
            brand: 'Dahon',
            model: 'Mariner D8',
            type: 'Folding',
            value: 699.99,
            frame_num: 'DAHON4687619',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'Compact and portable for easy storage and transportation.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884248.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 77,
            user_id: 77,
            name: 'Hybrid Bike',
            brand: 'Marin',
            model: 'Larkspur 2',
            type: 'Hybrid',
            value: 499.99,
            frame_num: 'MARIN8527739',
            frame_size: 'M',
            colour: 'Teal',
            gender: 'Male',
            description: 'Smooth ride for urban commutes and leisurely weekend rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884252.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 78,
            user_id: 85,
            name: 'Gravel Bike',
            brand: 'Orbea',
            model: 'Terra H40',
            type: 'Gravel',
            value: 1899.99,
            frame_num: 'ORBEA3577864',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Versatile bike for gravel racing and long-distance adventures.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/red-bike-is-parked-front-mountain-landscape_1340-38313.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 79,
            user_id: 78,
            name: 'Mountain Bike',
            brand: 'Yeti',
            model: 'SB130',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'YETI9637964',
            frame_size: 'M',
            colour: 'White',
            gender: 'Male',
            description: 'High-end performance bike for technical mountain trails.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884292.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 80,
            user_id: 5,
            name: 'Road Bike',
            brand: 'Pinarello',
            model: 'Dogma F12',
            type: 'Road',
            value: 9999.99,
            frame_num: 'PINARELLO7418019',
            frame_size: 'F',
            colour: 'Green',
            gender: 'Female',
            description: 'Top-of-the-line road bike for professional racing and enthusiasts.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880319.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 81,
            user_id: 83,
            name: 'City Bike',
            brand: 'Bianchi',
            model: 'Cortina Dama',
            type: 'City',
            value: 799.99,
            frame_num: 'BIANCHI2588146',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Stylish and comfortable bike for city commuting and casual rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880330.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 82,
            user_id: 39,
            name: 'Electric Bike',
            brand: 'Rad Power Bikes',
            model: 'RadRover 5',
            type: 'Electric',
            value: 1499.99,
            frame_num: 'RADPOWER3698220',
            frame_size: 'F',
            colour: 'Blue',
            gender: 'Female',
            description: 'Electric fat tire bike for all-terrain exploration and commuting.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880323.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 83,
            user_id: 8,
            name: 'Folding Bike',
            brand: 'Tern',
            model: 'Link D8',
            type: 'Folding',
            value: 899.99,
            frame_num: 'TERN6548316',
            frame_size: 'M',
            colour: 'Orange',
            gender: 'Male',
            description: 'Compact folding bike for urban mobility and easy storage.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834260.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 84,
            user_id: 56,
            name: 'Hybrid Bike',
            brand: 'Co-op Cycles',
            model: 'CTY 1.1 Bike',
            type: 'Hybrid',
            value: 599.99,
            frame_num: 'COOPCYCLES1478413',
            frame_size: 'F',
            colour: 'Red',
            gender: 'Female',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884322.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 85,
            user_id: 103,
            name: 'Gravel Bike',
            brand: 'Salsa',
            model: 'Journeyman Claris 650',
            type: 'Gravel',
            value: 1099.99,
            frame_num: 'SALSA8528517',
            frame_size: 'M',
            colour: 'Gray',
            gender: 'Male',
            description: 'Affordable gravel bike for entry-level riders and adventure seekers.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/close-up-bike-nature_23-2150814860.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 86,
            user_id: 34,
            name: 'Mountain Bike',
            brand: 'Scott',
            model: 'Genius 940',
            type: 'Mountain',
            value: 3499.99,
            frame_num: 'SCOTT369866',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Full-suspension mountain bike for technical descents and trail riding.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884260.jpg?semt=ais_user_ai_gen'
            ]
          },
          {
            id: 87,
            user_id: 85,
            name: 'Road Bike',
            brand: 'Giant',
            model: 'Defy Advanced 2',
            type: 'Road',
            value: 1999.99,
            frame_num: 'GIANT7418729',
            frame_size: 'M',
            colour: 'Blue',
            gender: 'Male',
            description: 'Endurance road bike for long-distance comfort and performance.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884272.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 88,
            user_id: 43,
            name: 'City Bike',
            brand: 'Sixthreezero',
            model: 'Explore Your Range',
            type: 'City',
            value: 349.99,
            frame_num: 'SIXTHREEZERO2588867',
            frame_size: 'F',
            colour: 'Green',
            gender: 'Female',
            description: 'Comfortable city bike for leisurely rides and exploring urban areas.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884266.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 89,
            user_id: 21,
            name: 'Electric Bike',
            brand: 'Juiced Bikes',
            model: 'CrossCurrent X',
            type: 'Electric',
            value: 2499.99,
            frame_num: 'JUICEDBIKES9638962',
            frame_size: 'M',
            colour: 'Gray',
            gender: 'Male',
            description: 'Powerful electric bike for commuting and long-range rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/close-up-bicycle-details-parts_23-2150834356.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 90,
            user_id: 7,
            name: 'Folding Bike',
            brand: 'Brompton',
            model: 'M6L Black Edition',
            type: 'Folding',
            value: 1999.99,
            frame_num: 'BROMPTON3579097',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'Premium folding bike with sleek design and compact foldability.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834280.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 91,
            user_id: 69,
            name: 'Hybrid Bike',
            brand: 'Cannondale',
            model: 'Quick CX 3',
            type: 'Hybrid',
            value: 899.99,
            frame_num: 'CANNONDALE654919',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884254.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 92,
            user_id: 48,
            name: 'Gravel Bike',
            brand: 'Specialized',
            model: 'Diverge Base E5',
            type: 'Gravel',
            value: 1199.99,
            frame_num: 'SPECIALIZED8529215',
            frame_size: 'F',
            colour: 'Purple',
            gender: 'Female',
            description: 'Adventure-ready gravel bike for exploring diverse terrain.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/bicycle-with-basket-front-is-parked-against-wall_1340-38311.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 93,
            user_id: 25,
            name: 'Mountain Bike',
            brand: 'Trek',
            model: 'Remedy 9.8',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'TREK3699335',
            frame_size: 'M',
            colour: 'Red',
            gender: 'Male',
            description: 'High-performance mountain bike for aggressive trail',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884248.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 94,
            user_id: 5,
            name: 'Gravel Bike',
            brand: 'Salsa',
            model: 'Journeyman Claris 650',
            type: 'Gravel',
            value: 1099.99,
            frame_num: 'SALSA8529474',
            frame_size: 'M',
            colour: 'Gray',
            gender: 'Male',
            description: 'Affordable gravel bike for entry-level riders and adventure seekers.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884252.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 95,
            user_id: 44,
            name: 'Mountain Bike',
            brand: 'Scott',
            model: 'Genius 940',
            type: 'Mountain',
            value: 3499.99,
            frame_num: 'SCOTT3699588',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Full-suspension mountain bike for technical descents and trail riding.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/red-bike-is-parked-front-mountain-landscape_1340-38313.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 96,
            user_id: 104,
            name: 'Road Bike',
            brand: 'Giant',
            model: 'Defy Advanced 2',
            type: 'Road',
            value: 1999.99,
            frame_num: 'GIANT74196102',
            frame_size: 'M',
            colour: 'Blue',
            gender: 'Male',
            description: 'Endurance road bike for long-distance comfort and performance.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884292.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 97,
            user_id: 47,
            name: 'City Bike',
            brand: 'Sixthreezero',
            model: 'Explore Your Range',
            type: 'City',
            value: 349.99,
            frame_num: 'SIXTHREEZERO2589763',
            frame_size: 'F',
            colour: 'Green',
            gender: 'Female',
            description: 'Comfortable city bike for leisurely rides and exploring urban areas.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880319.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 98,
            user_id: 12,
            name: 'Electric Bike',
            brand: 'Juiced Bikes',
            model: 'CrossCurrent X',
            type: 'Electric',
            value: 2499.99,
            frame_num: 'JUICEDBIKES9639813',
            frame_size: 'M',
            colour: 'Gray',
            gender: 'Male',
            description: 'Powerful electric bike for commuting and long-range rides.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880330.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 99,
            user_id: 62,
            name: 'Folding Bike',
            brand: 'Brompton',
            model: 'M6L Black Edition',
            type: 'Folding',
            value: 1999.99,
            frame_num: 'BROMPTON3579913',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'Premium folding bike with sleek design and compact foldability.',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880323.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
          {
            id: 100,
            user_id: 22,
            name: 'Hybrid Bike',
            brand: 'Cannondale',
            model: 'Quick CX 3',
            type: 'Hybrid',
            value: 899.99,
            frame_num: 'CANNONDALE65410018',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              'https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834260.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen'
            ]
          },
      {
        id: 101,
        user_id: 27,
        name: 'Gravel Bike',
        brand: 'Specialized',
        model: 'Diverge Base E5',
        type: 'Gravel',
        value: 1199.99,
        frame_num: 'SPECIALIZED85210115',
        frame_size: 'F',
        colour: 'Purple',
        gender: 'Female',
        description: 'Adventure-ready gravel bike for exploring diverse terrain.',
        owner: true,
        photos_url: [
          '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884322.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
        ]
      },
          {
            id: 102,
            user_id: 14,
            name: 'Mountain Bike',
            brand: 'Trek',
            model: 'Remedy 9.8',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'TREK3691029',
            frame_size: 'M',
            colour: 'Red',
            gender: 'Male',
            description: 'High-performance mountain bike for aggressive trail',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/close-up-bike-nature_23-2150814860.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 103,
            user_id: 91,
            name: 'Hybrid Bike',
            brand: 'Marin',
            model: 'Larkspur 2',
            type: 'Hybrid',
            value: 499.99,
            frame_num: 'MARIN8521031',
            frame_size: 'F',
            colour: 'Gray',
            gender: 'Female',
            description: 'Smooth ride for urban commutes and leisurely weekend rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884260.jpg?semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 104,
            user_id: 87,
            name: 'Gravel Bike',
            brand: 'Orbea',
            model: 'Terra H40',
            type: 'Gravel',
            value: 1899.99,
            frame_num: 'ORBEA35710454',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Versatile bike for gravel racing and long-distance adventures.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884272.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 105,
            user_id: 3,
            name: 'Mountain Bike',
            brand: 'Yeti',
            model: 'SB130',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'YETI9631054',
            frame_size: 'F',
            colour: 'Turquoise',
            gender: 'Female',
            description: 'High-end performance bike for technical mountain trails.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884266.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 106,
            user_id: 31,
            name: 'Road Bike',
            brand: 'Pinarello',
            model: 'Dogma F12',
            type: 'Road',
            value: 9999.99,
            frame_num: 'PINARELLO74110647',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Top-of-the-line road bike for professional racing and enthusiasts.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/close-up-bicycle-details-parts_23-2150834356.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 107,
            user_id: 54,
            name: 'City Bike',
            brand: 'Bianchi',
            model: 'Cortina Dama',
            type: 'City',
            value: 799.99,
            frame_num: 'BIANCHI25810774',
            frame_size: 'F',
            colour: 'Pink',
            gender: 'Female',
            description: 'Stylish and comfortable bike for city commuting and casual rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834280.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 108,
            user_id: 103,
            name: 'Electric Bike',
            brand: 'Rad Power Bikes',
            model: 'RadRover 5',
            type: 'Electric',
            value: 1499.99,
            frame_num: 'RADPOWER36910844',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Electric fat tire bike for all-terrain exploration and commuting.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884254.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 109,
            user_id: 15,
            name: 'Folding Bike',
            brand: 'Tern',
            model: 'Link D8',
            type: 'Folding',
            value: 899.99,
            frame_num: 'TERN65410988',
            frame_size: 'F',
            colour: 'Blue',
            gender: 'Female',
            description: 'Compact folding bike for urban mobility and easy storage.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/bicycle-with-basket-front-is-parked-against-wall_1340-38311.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 110,
            user_id: 18,
            name: 'Hybrid Bike',
            brand: 'Co-op Cycles',
            model: 'CTY 1.1 Bike',
            type: 'Hybrid',
            value: 599.99,
            frame_num: 'COOPCYCLES14711029',
            frame_size: 'M',
            colour: 'Green',
            gender: 'Male',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884248.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 111,
            user_id: 78,
            name: 'Gravel Bike',
            brand: 'Salsa',
            model: 'Journeyman Claris 650',
            type: 'Gravel',
            value: 1099.99,
            frame_num: 'SALSA8521116',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'Affordable gravel bike for entry-level riders and adventure seekers.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884252.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 112,
            user_id: 92,
            name: 'Mountain Bike',
            brand: 'Scott',
            model: 'Genius 940',
            type: 'Mountain',
            value: 3499.99,
            frame_num: 'SCOTT3691125',
            frame_size: 'M',
            colour: 'Red',
            gender: 'Male',
            description: 'Full-suspension mountain bike for technical descents and trail riding.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/red-bike-is-parked-front-mountain-landscape_1340-38313.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 113,
            user_id: 3,
            name: 'Road Bike',
            brand: 'Giant',
            model: 'Defy Advanced 2',
            type: 'Road',
            value: 1999.99,
            frame_num: 'GIANT74111347',
            frame_size: 'F',
            colour: 'Gray',
            gender: 'Female',
            description: 'Endurance road bike for long-distance comfort and performance.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884292.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 114,
            user_id: 48,
            name: 'City Bike',
            brand: 'Sixthreezero',
            model: 'Explore Your Range',
            type: 'City',
            value: 349.99,
            frame_num: 'SIXTHREEZERO25811434',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Comfortable city bike for leisurely rides and exploring urban areas.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880319.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 115,
            user_id: 15,
            name: 'Electric Bike',
            brand: 'Juiced Bikes',
            model: 'CrossCurrent X',
            type: 'Electric',
            value: 2499.99,
            frame_num: 'JUICEDBIKES96311543',
            frame_size: 'F',
            colour: 'White',
            gender: 'Female',
            description: 'Powerful electric bike for commuting and long-range rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880330.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 116,
            user_id: 35,
            name: 'Folding Bike',
            brand: 'Brompton',
            model: 'M6L Black Edition',
            type: 'Folding',
            value: 1999.99,
            frame_num: 'BROMPTON3571162',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Premium folding bike with sleek design and compact foldability.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880323.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 117,
            user_id: 60,
            name: 'Hybrid Bike',
            brand: 'Cannondale',
            model: 'Quick CX 3',
            type: 'Hybrid',
            value: 899.99,
            frame_num: 'CANNONDALE65411750',
            frame_size: 'F',
            colour: 'Green',
            gender: 'Female',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834260.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 118,
            user_id: 91,
            name: 'Gravel Bike',
            brand: 'Specialized',
            model: 'Diverge Base E5',
            type: 'Gravel',
            value: 1199.99,
            frame_num: 'SPECIALIZED85211823',
            frame_size: 'M',
            colour: 'Blue',
            gender: 'Male',
            description: 'Adventure-ready gravel bike for exploring diverse terrain.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884322.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 119,
            user_id: 93,
            name: 'Mountain Bike',
            brand: 'Trek',
            model: 'Remedy 9.8',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'TREK36911940',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'High-performance mountain bike for aggressive trail riding and enduro racing.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/close-up-bike-nature_23-2150814860.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 120,
            user_id: 101,
            name: 'Road Bike',
            brand: 'Cervelo',
            model: 'S5 Disc',
            type: 'Road',
            value: 8999.99,
            frame_num: 'CERVELO15912061',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Aero road bike for speed and performance in competitive racing.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884260.jpg?semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 121,
            user_id: 27,
            name: 'City Bike',
            brand: 'Raleigh',
            model: 'Carlton Mixte 8',
            type: 'City',
            value: 599.99,
            frame_num: 'RALEIGH7531212',
            frame_size: 'F',
            colour: 'Red',
            gender: 'Female',
            description: 'Stylish and comfortable bike for city commuting and casual rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884272.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 122,
            user_id: 23,
            name: 'Electric Bike',
            brand: 'Haibike',
            model: 'Sduro HardSeven 1.0',
            type: 'Electric',
            value: 2799.99,
            frame_num: 'HAIBIKE24612294',
            frame_size: 'M',
            colour: 'Blue',
            gender: 'Male',
            description: 'Powerful electric assistance for off-road adventures.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884266.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 123,
            user_id: 39,
            name: 'Folding Bike',
            brand: 'Dahon',
            model: 'Mariner D8',
            type: 'Folding',
            value: 699.99,
            frame_num: 'DAHON468123101',
            frame_size: 'F',
            colour: 'White',
            gender: 'Female',
            description: 'Compact and portable for easy storage and transportation.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/close-up-bicycle-details-parts_23-2150834356.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 124,
            user_id: 100,
            name: 'Hybrid Bike',
            brand: 'Marin',
            model: 'Larkspur 2',
            type: 'Hybrid',
            value: 499.99,
            frame_num: 'MARIN85212426',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Smooth ride for urban commutes and leisurely weekend rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834280.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 125,
            user_id: 23,
            name: 'Gravel Bike',
            brand: 'Orbea',
            model: 'Terra H40',
            type: 'Gravel',
            value: 1899.99,
            frame_num: 'ORBEA35712530',
            frame_size: 'F',
            colour: 'Green',
            gender: 'Female',
            description: 'Versatile bike for gravel racing and long-distance adventures.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884254.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 126,
            user_id: 38,
            name: 'Mountain Bike',
            brand: 'Yeti',
            model: 'SB130',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'YETI96312669',
            frame_size: 'M',
            colour: 'Gray',
            gender: 'Male',
            description: 'High-end performance bike for technical mountain trails.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/bicycle-with-basket-front-is-parked-against-wall_1340-38311.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 127,
            user_id: 83,
            name: 'Road Bike',
            brand: 'Pinarello',
            model: 'Dogma F12',
            type: 'Road',
            value: 9999.99,
            frame_num: 'PINARELLO74112798',
            frame_size: 'F',
            colour: 'Blue',
            gender: 'Female',
            description: 'Top-of-the-line road bike for professional racing and enthusiasts.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884248.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 128,
            user_id: 103,
            name: 'City Bike',
            brand: 'Bianchi',
            model: 'Cortina Dama',
            type: 'City',
            value: 799.99,
            frame_num: 'BIANCHI25812849',
            frame_size: 'M',
            colour: 'Red',
            gender: 'Male',
            description: 'Stylish and comfortable bike for city commuting and casual rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884252.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 129,
            user_id: 90,
            name: 'Electric Bike',
            brand: 'Rad Power Bikes',
            model: 'RadRover 5',
            type: 'Electric',
            value: 1499.99,
            frame_num: 'RADPOWER36912998',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'Electric fat tire bike for all-terrain exploration and commuting.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/red-bike-is-parked-front-mountain-landscape_1340-38313.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 130,
            user_id: 53,
            name: 'Folding Bike',
            brand: 'Tern',
            model: 'Link D8',
            type: 'Folding',
            value: 899.99,
            frame_num: 'TERN65413081',
            frame_size: 'M',
            colour: 'Green',
            gender: 'Male',
            description: 'Compact folding bike for urban mobility and easy storage.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884292.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 131,
            user_id: 54,
            name: 'Hybrid Bike',
            brand: 'Co-op Cycles',
            model: 'CTY 1.1 Bike',
            type: 'Hybrid',
            value: 599.99,
            frame_num: 'COOPCYCLES14713174',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880319.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 132,
            user_id: 82,
            name: 'Gravel Bike',
            brand: 'Salsa',
            model: 'Journeyman Claris 650',
            type: 'Gravel',
            value: 1099.99,
            frame_num: 'SALSA85213286',
            frame_size: 'M',
            colour: 'Orange',
            gender: 'Male',
            description: 'Affordable gravel bike for entry-level riders and adventure seekers.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880330.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 133,
            user_id: 45,
            name: 'Mountain Bike',
            brand: 'Scott',
            model: 'Genius 940',
            type: 'Mountain',
            value: 3499.99,
            frame_num: 'SCOTT36913330',
            frame_size: 'F',
            colour: 'Blue',
            gender: 'Female',
            description: 'Full-suspension mountain bike for technical descents and trail riding.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880323.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 134,
            user_id: 76,
            name: 'Road Bike',
            brand: 'Giant',
            model: 'Defy Advanced 2',
            type: 'Road',
            value: 1999.99,
            frame_num: 'GIANT74113473',
            frame_size: 'M',
            colour: 'Green',
            gender: 'Male',
            description: 'Endurance road bike for long-distance comfort and performance.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834260.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 135,
            user_id: 24,
            name: 'City Bike',
            brand: 'Sixthreezero',
            model: 'Explore Your Range',
            type: 'City',
            value: 349.99,
            frame_num: 'SIXTHREEZERO25813583',
            frame_size: 'F',
            colour: 'Purple',
            gender: 'Female',
            description: 'Comfortable city bike for leisurely rides and exploring urban areas.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884322.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 136,
            user_id: 15,
            name: 'Electric Bike',
            brand: 'Juiced Bikes',
            model: 'CrossCurrent X',
            type: 'Electric',
            value: 2499.99,
            frame_num: 'JUICEDBIKES96313692',
            frame_size: 'M',
            colour: 'Red',
            gender: 'Male',
            description: 'Powerful electric bike for commuting and long-range rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/close-up-bike-nature_23-2150814860.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 137,
            user_id: 20,
            name: 'Folding Bike',
            brand: 'Brompton',
            model: 'M6L Black Edition',
            type: 'Folding',
            value: 1999.99,
            frame_num: 'BROMPTON35713757',
            frame_size: 'F',
            colour: 'Gray',
            gender: 'Female',
            description: 'Premium folding bike with sleek design and compact foldability.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884260.jpg?semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 138,
            user_id: 52,
            name: 'Hybrid Bike',
            brand: 'Cannondale',
            model: 'Quick CX 3',
            type: 'Hybrid',
            value: 899.99,
            frame_num: 'CANNONDALE65413878',
            frame_size: 'M',
            colour: 'Teal',
            gender: 'Male',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884272.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 139,
            user_id: 32,
            name: 'Gravel Bike',
            brand: 'Specialized',
            model: 'Diverge Base E5',
            type: 'Gravel',
            value: 1199.99,
            frame_num: 'SPECIALIZED85213916',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Adventure-ready gravel bike for exploring diverse terrain.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884266.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 140,
            user_id: 57,
            name: 'Mountain Bike',
            brand: 'Trek',
            model: 'Remedy 9.8',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'TREK36914079',
            frame_size: 'M',
            colour: 'Blue',
            gender: 'Male',
            description: 'High-performance mountain bike for aggressive trail riding and enduro racing.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/close-up-bicycle-details-parts_23-2150834356.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 141,
            user_id: 68,
            name: 'Road Bike',
            brand: 'Cervelo',
            model: 'S5 Disc',
            type: 'Road',
            value: 8999.99,
            frame_num: 'CERVELO15914161',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'Aero road bike for speed and performance in competitive racing.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834280.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 142,
            user_id: 41,
            name: 'City Bike',
            brand: 'Raleigh',
            model: 'Carlton Mixte 8',
            type: 'City',
            value: 599.99,
            frame_num: 'RALEIGH75314267',
            frame_size: 'M',
            colour: 'Green',
            gender: 'Male',
            description: 'Stylish and comfortable bike for city commuting and casual rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884254.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 143,
            user_id: 92,
            name: 'Electric Bike',
            brand: 'Haibike',
            model: 'Sduro HardSeven 1.0',
            type: 'Electric',
            value: 2799.99,
            frame_num: 'HAIBIKE24614344',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Powerful electric assistance for off-road adventures.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/bicycle-with-basket-front-is-parked-against-wall_1340-38311.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 144,
            user_id: 51,
            name: 'Folding Bike',
            brand: 'Dahon',
            model: 'Mariner D8',
            type: 'Folding',
            value: 699.99,
            frame_num: 'DAHON4681449',
            frame_size: 'M',
            colour: 'Red',
            gender: 'Male',
            description: 'Compact and portable for easy storage and transportation.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884248.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 145,
            user_id: 63,
            name: 'Hybrid Bike',
            brand: 'Marin',
            model: 'Larkspur 2',
            type: 'Hybrid',
            value: 499.99,
            frame_num: 'MARIN85214557',
            frame_size: 'F',
            colour: 'White',
            gender: 'Female',
            description: 'Smooth ride for urban commutes and leisurely weekend rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884252.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 146,
            user_id: 63,
            name: 'Gravel Bike',
            brand: 'Orbea',
            model: 'Terra H40',
            type: 'Gravel',
            value: 1899.99,
            frame_num: 'ORBEA35714621',
            frame_size: 'M',
            colour: 'Gray',
            gender: 'Male',
            description: 'Versatile bike for gravel racing and long-distance adventures.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/red-bike-is-parked-front-mountain-landscape_1340-38313.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 147,
            user_id: 31,
            name: 'Mountain Bike',
            brand: 'Yeti',
            model: 'SB130',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'YETI9631479',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'High-end performance bike for technical mountain trails.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884292.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 148,
            user_id: 90,
            name: 'Road Bike',
            brand: 'Pinarello',
            model: 'Dogma F12',
            type: 'Road',
            value: 9999.99,
            frame_num: 'PINARELLO74114878',
            frame_size: 'M',
            colour: 'Green',
            gender: 'Male',
            description: 'Top-of-the-line road bike for professional racing and enthusiasts.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880319.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 149,
            user_id: 50,
            name: 'City Bike',
            brand: 'Bianchi',
            model: 'Cortina Dama',
            type: 'City',
            value: 799.99,
            frame_num: 'BIANCHI25814945',
            frame_size: 'F',
            colour: 'Blue',
            gender: 'Female',
            description: 'Stylish and comfortable bike for city commuting and casual rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880330.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 150,
            user_id: 18,
            name: 'Electric Bike',
            brand: 'Rad Power Bikes',
            model: 'RadRover 5',
            type: 'Electric',
            value: 1499.99,
            frame_num: 'RADPOWER36915068',
            frame_size: 'M',
            colour: 'Orange',
            gender: 'Male',
            description: 'Electric fat tire bike for all-terrain exploration and commuting.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880323.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 151,
            user_id: 25,
            name: 'Folding Bike',
            brand: 'Tern',
            model: 'Link D8',
            type: 'Folding',
            value: 899.99,
            frame_num: 'TERN65415126',
            frame_size: 'F',
            colour: 'Red',
            gender: 'Female',
            description: 'Compact folding bike for urban mobility and easy storage.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834260.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 152,
            user_id: 103,
            name: 'Hybrid Bike',
            brand: 'Co-op Cycles',
            model: 'CTY 1.1 Bike',
            type: 'Hybrid',
            value: 599.99,
            frame_num: 'COOPCYCLES14715285',
            frame_size: 'M',
            colour: 'Blue',
            gender: 'Male',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884322.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 153,
            user_id: 72,
            name: 'Gravel Bike',
            brand: 'Salsa',
            model: 'Journeyman Claris 650',
            type: 'Gravel',
            value: 1099.99,
            frame_num: 'SALSA85215397',
            frame_size: 'F',
            colour: 'Green',
            gender: 'Female',
            description: 'Affordable gravel bike for entry-level riders and adventure seekers.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/close-up-bike-nature_23-2150814860.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 154,
            user_id: 17,
            name: 'Mountain Bike',
            brand: 'Scott',
            model: 'Genius 940',
            type: 'Mountain',
            value: 3499.99,
            frame_num: 'SCOTT369154103',
            frame_size: 'M',
            colour: 'Purple',
            gender: 'Male',
            description: 'Full-suspension mountain bike for technical descents and trail riding.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884260.jpg?semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 155,
            user_id: 40,
            name: 'Road Bike',
            brand: 'Giant',
            model: 'Defy Advanced 2',
            type: 'Road',
            value: 1999.99,
            frame_num: 'GIANT74115521',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Endurance road bike for long-distance comfort and performance.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884272.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 156,
            user_id: 10,
            name: 'City Bike',
            brand: 'Sixthreezero',
            model: 'Explore Your Range',
            type: 'City',
            value: 349.99,
            frame_num: 'SIXTHREEZERO25815634',
            frame_size: 'M',
            colour: 'Gray',
            gender: 'Male',
            description: 'Comfortable city bike for leisurely rides and exploring urban areas.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884266.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 157,
            user_id: 54,
            name: 'Electric Bike',
            brand: 'Juiced Bikes',
            model: 'CrossCurrent X',
            type: 'Electric',
            value: 2499.99,
            frame_num: 'JUICEDBIKES9631579',
            frame_size: 'F',
            colour: 'Blue',
            gender: 'Female',
            description: 'Powerful electric bike for commuting and long-range rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/close-up-bicycle-details-parts_23-2150834356.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 158,
            user_id: 15,
            name: 'Folding Bike',
            brand: 'Brompton',
            model: 'M6L Black Edition',
            type: 'Folding',
            value: 1999.99,
            frame_num: 'BROMPTON35715837',
            frame_size: 'M',
            colour: 'Green',
            gender: 'Male',
            description: 'Premium folding bike with sleek design and compact foldability.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834280.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 159,
            user_id: 14,
            name: 'Hybrid Bike',
            brand: 'Cannondale',
            model: 'Quick CX 3',
            type: 'Hybrid',
            value: 899.99,
            frame_num: 'CANNONDALE65415973',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884254.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 160,
            user_id: 66,
            name: 'Gravel Bike',
            brand: 'Specialized',
            model: 'Diverge Base E5',
            type: 'Gravel',
            value: 1199.99,
            frame_num: 'SPECIALIZED85216070',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Adventure-ready gravel bike for exploring diverse terrain.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/bicycle-with-basket-front-is-parked-against-wall_1340-38311.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 161,
            user_id: 29,
            name: 'Mountain Bike',
            brand: 'Trek',
            model: 'Remedy 9.8',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'TREK36916123',
            frame_size: 'F',
            colour: 'Green',
            gender: 'Female',
            description: 'High-performance mountain bike for aggressive trail riding and enduro racing.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884248.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 162,
            user_id: 31,
            name: 'Road Bike',
            brand: 'Cervelo',
            model: 'S5 Disc',
            type: 'Road',
            value: 8999.99,
            frame_num: 'CERVELO15916282',
            frame_size: 'M',
            colour: 'Red',
            gender: 'Male',
            description: 'Aero road bike for speed and performance in competitive racing.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884252.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 163,
            user_id: 16,
            name: 'City Bike',
            brand: 'Raleigh',
            model: 'Carlton Mixte 8',
            type: 'City',
            value: 599.99,
            frame_num: 'RALEIGH75316324',
            frame_size: 'F',
            colour: 'Gray',
            gender: 'Female',
            description: 'Stylish and comfortable bike for city commuting and casual rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/red-bike-is-parked-front-mountain-landscape_1340-38313.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 164,
            user_id: 16,
            name: 'Electric Bike',
            brand: 'Haibike',
            model: 'Sduro HardSeven 1.0',
            type: 'Electric',
            value: 2799.99,
            frame_num: 'HAIBIKE2461642',
            frame_size: 'M',
            colour: 'Blue',
            gender: 'Male',
            description: 'Powerful electric assistance for off-road adventures.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884292.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 165,
            user_id: 12,
            name: 'Folding Bike',
            brand: 'Dahon',
            model: 'Mariner D8',
            type: 'Folding',
            value: 699.99,
            frame_num: 'DAHON4681657',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'Compact and portable for easy storage and transportation.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880319.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 166,
            user_id: 54,
            name: 'Hybrid Bike',
            brand: 'Marin',
            model: 'Larkspur 2',
            type: 'Hybrid',
            value: 499.99,
            frame_num: 'MARIN85216634',
            frame_size: 'M',
            colour: 'Teal',
            gender: 'Male',
            description: 'Smooth ride for urban commutes and leisurely weekend rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880330.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 167,
            user_id: 20,
            name: 'Gravel Bike',
            brand: 'Orbea',
            model: 'Terra H40',
            type: 'Gravel',
            value: 1899.99,
            frame_num: 'ORBEA35716780',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Versatile bike for gravel racing and long-distance adventures.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150880323.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 168,
            user_id: 88,
            name: 'Mountain Bike',
            brand: 'Yeti',
            model: 'SB130',
            type: 'Mountain',
            value: 5499.99,
            frame_num: 'YETI96316852',
            frame_size: 'M',
            colour: 'White',
            gender: 'Male',
            description: 'High-end performance bike for technical mountain trails.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834260.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 169,
            user_id: 11,
            name: 'Road Bike',
            brand: 'Pinarello',
            model: 'Dogma F12',
            type: 'Road',
            value: 9999.99,
            frame_num: 'PINARELLO74116932',
            frame_size: 'F',
            colour: 'Green',
            gender: 'Female',
            description: 'Top-of-the-line road bike for professional racing and enthusiasts.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884322.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 170,
            user_id: 81,
            name: 'City Bike',
            brand: 'Bianchi',
            model: 'Cortina Dama',
            type: 'City',
            value: 799.99,
            frame_num: 'BIANCHI25817042',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Stylish and comfortable bike for city commuting and casual rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/close-up-bike-nature_23-2150814860.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 171,
            user_id: 25,
            name: 'Electric Bike',
            brand: 'Rad Power Bikes',
            model: 'RadRover 5',
            type: 'Electric',
            value: 1499.99,
            frame_num: 'RADPOWER36917114',
            frame_size: 'F',
            colour: 'Blue',
            gender: 'Female',
            description: 'Electric fat tire bike for all-terrain exploration and commuting.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884260.jpg?semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 172,
            user_id: 96,
            name: 'Folding Bike',
            brand: 'Tern',
            model: 'Link D8',
            type: 'Folding',
            value: 899.99,
            frame_num: 'TERN65417221',
            frame_size: 'M',
            colour: 'Orange',
            gender: 'Male',
            description: 'Compact folding bike for urban mobility and easy storage.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884272.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 173,
            user_id: 22,
            name: 'Hybrid Bike',
            brand: 'Co-op Cycles',
            model: 'CTY 1.1 Bike',
            type: 'Hybrid',
            value: 599.99,
            frame_num: 'COOPCYCLES14717336',
            frame_size: 'F',
            colour: 'Red',
            gender: 'Female',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-outdoors_23-2150884266.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 174,
            user_id: 71,
            name: 'Gravel Bike',
            brand: 'Salsa',
            model: 'Journeyman Claris 650',
            type: 'Gravel',
            value: 1099.99,
            frame_num: 'SALSA85217433',
            frame_size: 'M',
            colour: 'Gray',
            gender: 'Male',
            description: 'Affordable gravel bike for entry-level riders and adventure seekers.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/close-up-bicycle-details-parts_23-2150834356.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 175,
            user_id: 17,
            name: 'Mountain Bike',
            brand: 'Scott',
            model: 'Genius 940',
            type: 'Mountain',
            value: 3499.99,
            frame_num: 'SCOTT36917571',
            frame_size: 'F',
            colour: 'Black',
            gender: 'Female',
            description: 'Full-suspension mountain bike for technical descents and trail riding.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/view-bicycle-beach_23-2150834280.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 176,
            user_id: 20,
            name: 'Road Bike',
            brand: 'Giant',
            model: 'Defy Advanced 2',
            type: 'Road',
            value: 1999.99,
            frame_num: 'GIANT7411761',
            frame_size: 'M',
            colour: 'Blue',
            gender: 'Male',
            description: 'Endurance road bike for long-distance comfort and performance.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884254.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 177,
            user_id: 22,
            name: 'City Bike',
            brand: 'Sixthreezero',
            model: 'Explore Your Range',
            type: 'City',
            value: 349.99,
            frame_num: 'SIXTHREEZERO2581771',
            frame_size: 'F',
            colour: 'Green',
            gender: 'Female',
            description: 'Comfortable city bike for leisurely rides and exploring urban areas.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/bicycle-with-basket-front-is-parked-against-wall_1340-38311.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 178,
            user_id: 88,
            name: 'Electric Bike',
            brand: 'Juiced Bikes',
            model: 'CrossCurrent X',
            type: 'Electric',
            value: 2499.99,
            frame_num: 'JUICEDBIKES96317856',
            frame_size: 'M',
            colour: 'Gray',
            gender: 'Male',
            description: 'Powerful electric bike for commuting and long-range rides.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884248.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 179,
            user_id: 98,
            name: 'Folding Bike',
            brand: 'Brompton',
            model: 'M6L Black Edition',
            type: 'Folding',
            value: 1999.99,
            frame_num: 'BROMPTON35717973',
            frame_size: 'F',
            colour: 'Orange',
            gender: 'Female',
            description: 'Premium folding bike with sleek design and compact foldability.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884252.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 180,
            user_id: 21,
            name: 'Hybrid Bike',
            brand: 'Cannondale',
            model: 'Quick CX 3',
            type: 'Hybrid',
            value: 899.99,
            frame_num: 'CANNONDALE65418068',
            frame_size: 'M',
            colour: 'Black',
            gender: 'Male',
            description: 'Versatile bike for city streets',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/red-bike-is-parked-front-mountain-landscape_1340-38313.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          },
          {
            id: 181,
            user_id: 25,
            name: 'Gravel Bike',
            brand: 'Specialized',
            model: 'Diverge Base E5',
            type: 'Gravel',
            value: 1199.99,
            frame_num: 'SPECIALIZED85218145',
            frame_size: 'F',
            colour: 'Purple',
            gender: 'Female',
            description: 'Adventure-ready gravel bike for exploring diverse terrain.',
            owner: true,
            photos_url: [
              '{https://img.freepik.com/free-photo/cool-bicycle-studio_23-2150884292.jpg?ga=GA1.1.1050444771.1719842061&semt=ais_user_ai_gen}'
            ]
          }
      ]





  for (const data of bicycleData) {
    await prisma.bicycle.upsert({
      where: {id:data.id},
      update: {}, // No updates if the record already exists
      create: data,
    });
  }
}




