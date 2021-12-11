const express = require("express");
const productsRouter = express.Router();
const { createProduct, getSingleProduct, getAllProducts } = require("../db/products");

productsRouter.get("/all_NFTs", async (req, res, next) => {
  try {
    res.send(await getAllProducts());
  } catch (error) {
    next(error);
  }
});