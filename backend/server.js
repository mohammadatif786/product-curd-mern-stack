import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();
app.use(express.json()); // convert user data into json req.body
app.use("/api/products", productRoutes);

app.listen(5000, async () => {
  await connectDB();
  console.log("Server started at http://localhost:5000");
});
