const express = require("express");
const productsRouter = express.Router();
const { createProduct, getSingleProduct, getAllProducts } = require("../db/products");

productsRouter.get("/", async (req, res, next) => {
  try {
    console.log('helloszzz')
    const products = await getAllProducts();
    console.log('products ROUTE', products);
    res.send(await getAllProducts());
  } catch (error) {
    next(error);
  }
});


module.exports = productsRouter ;