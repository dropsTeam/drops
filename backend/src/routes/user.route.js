const route = require('express').Router();
const userC = require('../controllers/user.mid');
const authC = require('../controllers/auth.mid');

route.get('/', authC.googleVerify(true), userC.get);
route.get('/cart', authC.googleVerify(true), userC.getCart);

module.exports = route;
