import dotenv from 'dotenv';
import express from 'express';
import cors, { CorsOptions } from 'cors';
import prisma from './middlewares/prisma';
import bicycleRoutes from './routes/bicycle.routes';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

// CORS configuration options
const allowedOrigins = ['http://localhost:4200', 'http://localhost:3000'];
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);

    // Allow requests from allowed origins
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200, // For legacy browser support
};

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use('/api/bicycles', bicycleRoutes);

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
