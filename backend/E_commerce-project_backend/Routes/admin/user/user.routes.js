const express = require("express");
const user_router = express.Router();

const {get, post, update, destroy} = require('../../../Controler/admin/User/user');
const  {validate}  = require("../../../validation/admin/User/Uservalidation");

user_router.get("/", get);
user_router.post("/", validate, post);
user_router.put("/:user_Id", update);
user_router.delete("/:user_Id", destroy);

module.exports = {user_router}