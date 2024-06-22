import dotenv from 'dotenv';
import express from 'express';
import cors, { CorsOptions } from 'cors';

// Load environment variables from .env file
dotenv.config();

// Create an instance of express application
const app = express();

// Define the port from environment variables or fallback to 3000
const port = process.env.PORT || 3000;

// Define allowed origins for CORS
const allowedOrigins = ['http://localhost:4200', 'http://localhost:3000'];

// CORS configuration options
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

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS with the defined options
app.use(cors(corsOptions));

// Define a simple route for the root URL
app.get('/', (req, res) => {
  res.status(200).send('BikeTyson API');
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
