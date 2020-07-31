const route = require('express').Router();
const userC = require('../controllers/user.mid');
const authC = require('../controllers/auth.mid');
const productC = require('../controllers/product.mid');
const { auth } = require('../../config');


route.get('/', authC.googleVerify(true, true), userC.get);

route
    .get('/cart', authC.googleVerify(true, true), userC.getCart)
    .post('/cart', authC.googleVerify(true, true), productC.basicProductInfo, userC.postCart(false))
    .delete('/cart', authC.googleVerify(true, true), userC.deleteCartItem)
    .put('/cart', authC.googleVerify(true, true), userC.editCart)

route.get('/searchHistory', authC.googleVerify(true, true), userC.getSearchHistory)
    .get('/recommendation', authC.googleVerify(true, true), userC.getRecommendedItems)

route.post('/seller', authC.googleVerify(true, true), authC.signUpAsSeller)

module.exports = route;
