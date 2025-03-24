import express from "express";
import {
  deleteProduct,
  getProducts,
  storeProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", storeProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
