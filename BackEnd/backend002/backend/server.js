import app from "./app.js";
import dotenv from "dotenv";
import dbConfig from "./config/db.config.js";
dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 3000;

dbConfig() // Call the database configuration function to connect to MongoDB
  .then(() => {
    app.listen(PORT, (error) => {
      if (error) {
        console.error("Error starting the server:", error);
        process.exit(1); // Exit the process with failure
      }
      console.log(`Server is running on port ${PORT}`);
    });

    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection error:", error); // Exit the process with failure
  });

// app.listen(PORT, (error) => {
//   if (error) {
//     console.error("Error starting the server:", error);
//     process.exit(1); // Exit the process with failure
//   }
//   console.log(`Server is running on port ${PORT}`);
// });
