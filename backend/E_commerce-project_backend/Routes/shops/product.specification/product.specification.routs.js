const express = require("express");
const productSpecification_routes = express.Router();

const {get, post, update, destroy} = require("../../../Controler/shops/product.specification/product.specification.controler");

const {validate} = require("../../../validation/shops/product.specification/product.specifi.validation");


productSpecification_routes.get("/", get);
productSpecification_routes.post("/", validate, post);
productSpecification_routes.put("/:product_spec", validate, update);
productSpecification_routes.delete("/:product_spec", destroy);

module.exports = {productSpecification_routes}