const express = require("express");

const ShopReg_routes = express.Router();
const {get, post, update, destroy} = require("../../../Controler/admin/shop.registration/company-admin_controlar");
const {validate} = require("../../../validation/admin/shopRegistration/admin.validation");

ShopReg_routes.get("/", get);
ShopReg_routes.post("/", validate, post);
ShopReg_routes.put("/:shop_registration", validate, update);
ShopReg_routes.delete("/:shop_registration", destroy);

module.exports = {ShopReg_routes}