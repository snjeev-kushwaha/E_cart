const express = require("express");

const productspecification1_routes = express.Router();
const get = require("../../../Controler/shops/product.specification/productspecification");


productspecification1_routes.get("/:product_id", get);


module.exports = {productspecification1_routes};
