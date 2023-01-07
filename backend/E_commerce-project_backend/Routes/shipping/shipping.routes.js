const express = require('express');
const Ship_routes = express.Router();

const {get, post, update, destroy} = require("../../Controler/shipping/shipping.controler")
const {validate} = require("../../validation/shipping/shipping.validation");

// Routes off
// shop-registration -------------
Ship_routes.get("/",get )
Ship_routes.post("/", validate, post )
Ship_routes.put("/:ship_id", validate, update )
Ship_routes.delete("/:ship_id", destroy)

module.exports = {Ship_routes};
