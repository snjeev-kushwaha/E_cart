const express = require("express");
const AddToList_routes = express.Router();
const {get, post, update, destroy} = require("../../../Controler/Customers/AddWishList/addwishlist.controler");
const {validate} = require("../../../validation/customers/Addwishlist/addwishlist.validation");


AddToList_routes.get("/", get);
AddToList_routes.post("/", validate, post);
AddToList_routes.put("/:product_id", validate, update);
AddToList_routes.delete("/:product_id", destroy);

module.exports = {AddToList_routes}