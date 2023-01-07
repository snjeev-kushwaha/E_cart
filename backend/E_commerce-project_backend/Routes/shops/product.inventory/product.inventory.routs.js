const express = require("express");
const product_routes = express.Router();

const {get, post, update, destroy} = require("../../../Controler/shops/Product.Inventory/product.inventory.controler");
const {validate} = require("../../../validation/shops/product.Inventory/productinve.validation");

product_routes.get("/", get);
product_routes.post("/", validate, post);
product_routes.put("/:product_id", validate, update);
product_routes.delete("/:product_id", destroy);

module.exports = {product_routes};
