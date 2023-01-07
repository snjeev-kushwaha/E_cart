const express = require("express");

const offer_routes = express.Router();
const {get, post, update, destory} = require("../../../Controler/admin/offer/offer.controler");
const {validate} = require("../../../validation/admin/offers/offers.validation")

offer_routes.get("/", get);
offer_routes.post("/", validate, post);
offer_routes.put("/:offer_id", validate, update);
offer_routes.delete("/:offer_id", destory);

module.exports = {offer_routes}
