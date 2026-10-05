import mongoose from "mongoose";
import "dotenv/config";

const databaseUrl = process.env.MONGODB_URL;

if (!databaseUrl) {
  throw new Error("MONGODB_URL is required");
}

const connectDB = async () => {
  try {
    await mongoose.connect(databaseUrl);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

export default connectDB;