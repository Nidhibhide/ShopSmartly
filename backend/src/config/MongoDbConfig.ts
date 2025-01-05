import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export const connection = async (): Promise<void> => {
  try {
    const dbName: string = 'shopsmartly'; // Database name
    const dbUrl: string = process.env.MONGO_URI || `mongodb://localhost:27017/${dbName}`; // Connection URL

    await mongoose.connect(dbUrl, {
      dbName, // Specify the database name explicitly
    } as mongoose.ConnectOptions);

    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }
};
