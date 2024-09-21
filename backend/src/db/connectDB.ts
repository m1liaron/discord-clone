import mongoose from 'mongoose';

const connectDB = async (MongoURL: string) => {
    try {
      await mongoose.connect(MongoURL);
      console.log('MongoDB connected');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1);
    }
  };

export default connectDB;