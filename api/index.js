import "dotenv/config.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import connectDB from "./config/dbConn.js";
import corsOptions from "./config/corsOptions.js";
import { register, income, auth, expense } from "./routes/index.js";

const DB_URI =
  "mongodb+srv://iamgauravkha:CpQ4xZr2VWUDBQZA@cluster0.2t48x1t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; //should be in .env

connectDB(DB_URI);
const PORT = process.env.PORT || 3500;
const app = express();

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1/register", register);
app.use("/api/v1/login", auth);
app.use("/api/v1/income", income);
app.use("/api/v1/expense", expense);

mongoose.connection.once("open", () => {
  console.log("connect to mongodb");
  app.listen(PORT, () => {
    console.log(`server is listening on Port ${PORT}`);
  });
});
