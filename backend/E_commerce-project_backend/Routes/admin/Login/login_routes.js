const express = require("express");

const userRoutes = express.Router();
const {userRegister, userLogin} = require('../../../Controler/admin/Login/login');

userRoutes.post('/register', userRegister);
userRoutes.post('/login', userLogin);

module.exports = {userRoutes};
