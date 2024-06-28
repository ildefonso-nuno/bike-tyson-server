import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import prisma from '../middlewares/prisma';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const verifyGoogleToken = async (token: string) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  return ticket.getPayload();
};

export const findOrCreateUser = async (payload: any) => {
  const {
    sub: google_id,
    email,
    given_name: first_name,
    family_name: last_name,
    picture: profile_pic_url,
  } = payload;

  let user = await prisma.user.findUnique({ where: { google_id } });

  if (!user && email) {
    user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          google_id,
          email,
          first_name,
          last_name,
          profile_pic_url,
        },
      });
    } else {
      user = await prisma.user.update({
        where: { email },
        data: { google_id },
      });
    }
  }

  return user;
};

export const generateJwtToken = (user: any) => {
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });
};
