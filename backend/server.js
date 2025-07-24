import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import tourRoutes from './routes/tourRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Test Routes
app.use('/api/test', testRoutes);

// Authentication routes
app.use('/api/auth', authRoutes);

// Tour package routes
app.use('/api/packages', tourRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});