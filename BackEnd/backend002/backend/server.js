import app from "./app.js";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
    process.exit(1); // Exit the process with failure
  }
  console.log(`Server is running on port ${PORT}`);
});
