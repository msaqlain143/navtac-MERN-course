import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// console.log("wefrewf", process.env.MONGODB_URL);
const dbConfig = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DB_NAME}`
    );
    console.log(
      `MONGO DB is Running at <port> ${connectionInstance.connection.port}`
    );
    return connectionInstance; // Return the connection instance
  } catch (error) {
    console.error("MongoDB connection error:", error); // Exit the process with failure
    throw new Error("FAILED TO CONNECT MONGODB ");
  }
};

export default dbConfig;
