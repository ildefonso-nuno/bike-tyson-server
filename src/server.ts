import dotenv from 'dotenv';
import express from 'express';
import cors, { CorsOptions } from 'cors';
import prisma from './middlewares/prisma';
import bicycleRoutes from './routes/bicycle.routes';
import userReportRoutes from './routes/userReport.routes';
import photoRoutes from './routes/photo.routes';
import dataRoutes from './routes/data.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

// CORS configuration options
// const allowedOrigins = ['http://localhost:5175', 'http://localhost:3000'];
// const corsOptions: CorsOptions = {
//   origin: (origin, callback) => {
//     // Allow requests with no origin (like Postman)
//     if (!origin) return callback(null, true);

//     // Allow requests from allowed origins
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   optionsSuccessStatus: 200, // For legacy browser support
// };

const corsOptions: CorsOptions = {
  origin: true, // Allow all origins
  optionsSuccessStatus: 200, // For legacy browser support
};

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.use('/api/bicycles', bicycleRoutes);
app.use('/api/user-reports', userReportRoutes);

app.use('/api/photos', photoRoutes);

app.use('/api/data', dataRoutes);

app.get('/', (req, res) => {
  res.status(200).send('BikeTyson API');
});

// Test DB connection, start the server and listen on the defined port
const testDatabaseConnection = async () => {
  try {
    await prisma.$connect();
    console.log('Database connection successful:', process.env.DATABASE_URL);
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
};

const startServer = async () => {
  await testDatabaseConnection();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
