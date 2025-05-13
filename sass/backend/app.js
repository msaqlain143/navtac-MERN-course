import express from "express";
import cookie from "cookie-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//middleware implement
// json in builb global middleware

app.use(express.json());

//urlencoded
app.use(express.urlencoded({ extended: true }));

//cors middleware

const whiteList = [];
const corsOptions = {
  origin: function (origin, cb) {
    if (whiteList.includes(origin) || !origin) {
      cb(null, true);
    } else {
      cb(new Error("Not allowed by cors "));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

//cookie parser

app.use(cookieParser());

// routes
import OwnerRouter from "./src/routes/owner/Owner.route.js";
app.use("/api/v1/owner", OwnerRouter);

//erro middleware
import errorMiddleware from "./src/middleware/Error.middleware.js";
app.use(errorMiddleware);

export default app;
