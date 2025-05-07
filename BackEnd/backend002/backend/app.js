import express from "express";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import dotenv from "dotenv";

const app = express();

//cors <cross origin resource sharing>
app.use(
  cors({
    origin: "*",
  })
);
//routes

app.use("/api/v1/user", userRoute);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/data", (req, res) => {
//   res.send({
//     name: "John Doe",
//     age: 30,
//     city: "New York",
//   });
// });

export default app;
