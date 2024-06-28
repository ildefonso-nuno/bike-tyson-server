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

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      select: {
        id: true,
      },
      where: { email },
    });

    return user;
  } catch (error) {
    throw new Error('Error getting user by email');
  }
};

export const updateUser = async (id: number, data: any) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date(),
      },
    });
    return updatedUser;
  } catch (error) {
    throw new Error('Error updating user');
  }
};
