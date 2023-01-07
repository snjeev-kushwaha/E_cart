const express = require("express");

const makepayment_routes = express.Router();
const {get, post, update, destroy} = require("../../../Controler/Customers/MakePayment/makepayment.controler");
const {validate} = require("../../../validation/customers/makepayment/makepay.validation");

makepayment_routes.get("/", get)
makepayment_routes.post("/", validate, post)
makepayment_routes.put("/:invoice", validate, update)
makepayment_routes.delete("/:invoice", destroy)

module.exports = {makepayment_routes}