const express = require("express");

const Review_routes = express.Router();
const {get, post, update, destroy}  = require("../../../Controler/Customers/Review/review.controler");
const {validate} = require("../../../validation/customers/Review/Review.controler");

Review_routes.get("/", get);
Review_routes.post("/", validate, post);
Review_routes.put("/:cart_id", validate, update);
Review_routes.delete("/:cart_id", destroy);

module.exports = {Review_routes}
