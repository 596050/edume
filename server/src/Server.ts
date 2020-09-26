import morgan from "morgan";
import cookieParser from "cookie-parser";
import path from "path";
import helmet from "helmet";
import cors from "cors";

import express, { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import "express-async-errors";

import BaseRouter from "./routes";
import logger from "@shared/Logger";

// Init express
const app = express();
app.use(cors());
// {
// origin: ["http://localhost:3000", "http://localhost:3000/"],
// }

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Security
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

// Add APIs
app.use("/api", BaseRouter);
app.get("*", function (req, res) {
  res.status(StatusCodes.NOT_FOUND).send("Invalid route");
});

// Print API errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("HEJODJ");
  logger.error(err.message, err);
  return res.status(StatusCodes.BAD_REQUEST).json({
    error: err.message,
  });
});

// Export express instance
export default app;
