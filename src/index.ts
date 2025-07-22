import express, { NextFunction, Request, Response } from "express";
import productRoutes from "./routes/product.routes";
import authRoutes from "./routes/auth.routes";
import { connectToDB } from "./db/sequelizeConnect";
import { port } from "./config";

const app = express();
// const port = port || 3000;

connectToDB()//
  .then(() => console.log("DB connected"))
  .catch(error => console.log(error.message));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes)
app.use("/api/auth", authRoutes)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  const status = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(status).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
