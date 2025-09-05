import "express-async-errors";
import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import cors from "cors";

import { connectToDB } from "./db/sequelizeConnect";
import { port } from "./config";

import swaggerSpec from "./swagger/swaggerConfig";
import swaggerUi from "swagger-ui-express";

import productRoutes from "./products/product.routes";
import authRoutes from "./auth/auth.routes";
import globalErrorHandler from "./common/utils/globalErrorHandler";

const app = express();
// const port = port || 3000;

connectToDB()//
  .then(() => console.log("DB connected"))
  .catch(error => console.log(error.message));

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/products", productRoutes)
app.use("/api/auth", authRoutes)
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.use((req, res, next) => {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error); // importante -> manda el error al manejador global
});

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
