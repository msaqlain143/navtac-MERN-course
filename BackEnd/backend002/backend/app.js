import express from "express";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import productRoute from "./routes/product.route.js";
import dotenv from "dotenv";

const app = express();

//cors <cross origin resource sharing>
// app.use(
//   cors({
//     origin: "*",
//   })
// );

const whiteListOrigins = ["http://localhost:5173"];
const corsOptions = {
  origin: function (origin, cb) {
    if (whiteListOrigins.includes(origin) || !origin) {
      cb(null, true); // error success
    } else {
      cb(new Error("not allowed by cors"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE"],
};

app.use(cors(corsOptions)); //cors middleware implemnt
//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
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
