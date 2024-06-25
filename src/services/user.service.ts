import prisma from '../middlewares/prisma';

export const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
      address: true,
      date_of_birth: true,
      phone_number: true,
      profile_pic_url: true,
    },
    where: { id },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};
