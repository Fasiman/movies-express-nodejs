import express from "express"

const productsRouter = express.Router()

productsRouter.get("/products", (req, res) => {
  res.send(products);
});


export default productsRouter