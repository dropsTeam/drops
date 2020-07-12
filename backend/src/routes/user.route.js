const route = require('express').Router();
const userC = require('../controllers/user.mid');
const authC = require('../controllers/auth.mid');
const productC = require('../controllers/product.mid');


route.get('/', authC.googleVerify(true), userC.get);

route
    .get('/cart', authC.googleVerify(true), userC.getCart)
    .post('/cart', authC.googleVerify(true), productC.basicProductInfo, userC.postCart)
    .delete('/cart/:index', authC.googleVerify(true), userC.deleteCartItem)

module.exports = route;
