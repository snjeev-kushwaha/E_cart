const express = require("express");

const PC_routes = express.Router();
const {get, post, update, destroy} = require("../../../Controler/admin/product.category/productcategory.controler");
const {validate} = require("../../../validation/admin/product.category/product.category.validation");

PC_routes.get("/", get);
PC_routes.post("/", validate, post);
PC_routes.put("/:category_id", validate, update);
PC_routes.delete("/:category_id", destroy);

module.exports = {PC_routes}