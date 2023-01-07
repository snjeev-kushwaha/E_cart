const express = require("express")
const banking_route = express.Router();

const {get, post, update, destroy} = require("../../../Controler/shops/Banking/Banking");
const validate = require("../../../validation/shops/Banking/Banking");


banking_route.get("/", get);
banking_route.post("/", validate, post);
banking_route.put("/:account_no", update);
banking_route.delete("/:account_no", destroy);

module.exports = {banking_route};