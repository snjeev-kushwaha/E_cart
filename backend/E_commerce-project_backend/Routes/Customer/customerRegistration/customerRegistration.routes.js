const express = require("express")

const CustomerReg_routes = express.Router();
const {get, post, update, destroy} = require("../../../Controler/Customers/customerRegistration/customerRegistration.controlar")
const {validate} = require("../../../validation/customers/customerRegistration/customerReg.validation");

CustomerReg_routes.get("/", get)
CustomerReg_routes.post("/", validate, post)
CustomerReg_routes.put("/:customer_mobile", validate, update)
CustomerReg_routes.delete("/:customer_mobile", destroy)

module.exports = {CustomerReg_routes}