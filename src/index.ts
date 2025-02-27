import express from "express";
import productRoutes from "./routes/product.routes";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", productRoutes)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
