import express from "express";
import productRoutes from "./routes/product.routes";
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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
