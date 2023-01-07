const express = require("express");

const cart_routes = express.Router();

const {get, post, update, destroy} = require("../../../Controler/Customers/Cart/cart.controler");
const {validate} = require("../../../validation/customers/Cart/cart.validation");

cart_routes.get("/", get)
cart_routes.post("/", validate, post)
cart_routes.put("/:cart_id", validate, update)
cart_routes.delete("/:cart_id", destroy)

module.exports = {cart_routes}