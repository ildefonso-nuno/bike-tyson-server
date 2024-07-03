import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import prisma from '../middlewares/prisma';
import jwt from 'jsonwebtoken';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_REDIRECT_URI!,
    },
    async (accessToken, refreshToken, profile, done) => {
      const google_id = profile.id;
      const email = profile.emails?.[0].value;
      const first_name = profile.name?.givenName;
      const last_name = profile.name?.familyName;
      const profile_pic_url = profile.photos?.[0].value;

      let user = await prisma.user.findUnique({
        where: { google_id },
      });

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

      if (user) {
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
          expiresIn: '24h',
        });
        return done(null, { user, token });
      } else {
        return done(new Error('User not found'), undefined);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});

export default passport;
