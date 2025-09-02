import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import productRoutes from "./products/product.routes";
import authRoutes from "./auth/auth.routes";
import { connectToDB } from "./db/sequelizeConnect";
import { port } from "./config";
import swaggerSpec from "./swagger/swaggerConfig";
import swaggerUi from "swagger-ui-express";

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


app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", error);
  console.error("statusCode", error.statusCode);

  // Si ya tenemos un status distinto de 200, lo respetamos; si no, asumimos 500
  const status = error.statusCode ?? 500;

  res.status(status).json({
    status,
    message: error.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
