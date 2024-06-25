import prisma from '../middlewares/prisma';

export const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};
