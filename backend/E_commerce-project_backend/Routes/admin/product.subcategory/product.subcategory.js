const express = require("express");

const PSC_routes = express.Router();

const {get,getData, post, update, destroy} = require("../../../Controler/admin/product.subcategory/productsubcategory.controler");
const { validate } = require("../../../validation/admin/product.subcategory/productsub.validation");


PSC_routes.get("/", get);
PSC_routes.get("/sub_catname", getData);
PSC_routes.post("/", validate, post);
PSC_routes.put("/:sub_category_id", validate, update);
PSC_routes.delete("/:sub_category_id", destroy);

module.exports = {PSC_routes}