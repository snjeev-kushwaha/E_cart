const express = require("express");
const employee_route = express.Router();

const {get, post, update, destroy} = require("../../../Controler/shops/Employee/employee");
const validate = require("../../../validation/shops/Employee/employee");

employee_route.get("/", get);
employee_route.post("/", validate, post);
employee_route.put("/:employee_id", update);
employee_route.delete("/:employee_id", destroy);

module.exports = {employee_route};