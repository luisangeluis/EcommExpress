import { ErrorRequestHandler } from "express";
import { AppError } from "./appError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }

  console.error(err.message);
  res.status(500).json({ message: "Internal server error" });
};

export default globalErrorHandler;