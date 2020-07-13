const route = require('express').Router();
const userC = require('../controllers/user.mid');
const authC = require('../controllers/auth.mid');
const productC = require('../controllers/product.mid');

route.post('/product',authC.googleVerify(true), authC.isSeller,  productC.postProduct);


module.exports = route;
