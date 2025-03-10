import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes";
import { connectToDB } from "./db/sequelizeConnect";
import { port } from "./config";

// dotenv.config({
//   path: process.env.NODE_ENV === "development" ? ".dev.env" : ".env"
// });

const app = express();
// const port = port || 3000;

connectToDB()//
  .then(()=>console.log("DB connected"))
  .catch(error=>console.log(error.message));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", productRoutes)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
