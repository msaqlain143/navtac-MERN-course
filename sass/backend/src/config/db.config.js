import chalk from "chalk";
import mongoose from "mongoose";

async function connectDB() {
  const MONGOOSDB_URL = process.env.MONGOOSDB_URL;
  const DB_NAME = process.env.DB_NAME;

  try {
    const connectionInstance = await mongoose.connect(
      `${MONGOOSDB_URL}/${DB_NAME}`
    );
    console.log(
      chalk.yellow(
        `Database Connected at host  ${connectionInstance.connection.host} on port ${connectionInstance.connection.port}`
      )
    );
  } catch (error) {
    throw new Error(` Database Connection failed due to -----> ${error}`);
  }
}

export default connectDB;
