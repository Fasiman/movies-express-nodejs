import express from "express";
import { products } from "../data/products.js";

const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
  res.status(200).json(products);
});

export default productsRouter;
