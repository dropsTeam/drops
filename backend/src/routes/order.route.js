const route = require('express').Router();
const authC = require('../controllers/auth.mid');
const orderC = require('../controllers/orders.mid');
const userC = require('../controllers/user.mid');
const productC = require('../controllers/product.mid');

route.post('/', authC.googleVerify(true, true), orderC.post)
    .post('/directCheckout', authC.googleVerify(true, true), productC.basicProductInfo, userC.postCart(true), orderC.post)
    .get('/userOrders/:page', authC.googleVerify(true, true), orderC.get)
    .get('/sellerOrders/:page', authC.googleVerify(true, true), orderC.getSellerOrders)


module.exports = route;
