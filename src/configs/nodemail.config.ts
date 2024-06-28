// import nodemailer from 'nodemailer';

// // Configure nodemailer (use your email service credentials)
// export const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PASS,
//   },
// });

import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID!,
  process.env.GOOGLE_CLIENT_SECRET!,
  'https://developers.google.com/oauthplayground' // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const getAccessToken = async () => {
  try {
    const token = await oauth2Client.getAccessToken();
    return token.token;
  } catch (error) {
    console.error('Failed to create access token:', error);
    throw new Error('Failed to create access token');
  }
};

export const createTransporter = async () => {
  const accessToken = await getAccessToken();

  console.log('Creating transporter with access token:', accessToken);

  console.log(
    process.env.EMAIL,
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REFRESH_TOKEN
  );

  return nodemailer.createTransport({
    service: String('gmail') || '',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL!,
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN!,
      scope: 'https://www.googleapis.com/auth/gmail.send',
      accessToken: accessToken,
    },
  } as nodemailer.TransportOptions);
};
