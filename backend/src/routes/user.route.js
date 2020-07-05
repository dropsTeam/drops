const route = require('express').Router();
const userC = require('../controllers/user.mid');
const authC = require('../controllers/auth.mid');

route.get('/', authC.googleVerify(true), userC.get);

module.exports = route;
