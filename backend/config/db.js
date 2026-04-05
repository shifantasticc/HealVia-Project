import mongoose from 'mongoose';

const dbUrl = process.env.ATLASDB_URL;

export const connectDB = async () => {
  await mongoose.connect(dbUrl).then(() => {
    console.log('DB connected');
  });
};