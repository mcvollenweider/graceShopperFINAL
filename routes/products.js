const express = require("express");
const productsRouter = express.Router();
const { createProduct, getSingleProduct, getAllProducts } = require("../db/products");

productsRouter.get("/products/item/:id", async (req, res, next) => {
  try {        
    const product = await getSingleProduct( req.params.id );    
    res.send(product);

  } catch (error) {
    next(error);
  }
});

productsRouter.get("/", async (req, res, next) => {
  try {
    console.log('helloszzz')
    const products = await getAllProducts();
    console.log('products ROUTE', products);
    console.log('helloszzz')
    res.send(await getAllProducts());

  } catch (error) {
    next(error);
  }
});



module.exports = productsRouter ;