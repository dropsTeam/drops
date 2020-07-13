const route = require('express').Router();
const userC = require('../controllers/user.mid');
const authC = require('../controllers/auth.mid');
const productC = require('../controllers/product.mid');

route
    .post('/', authC.googleVerify(true), authC.isSeller, productC.postProduct)
    .put('/:productId', authC.googleVerify(true), productC.editProduct);

route
    .get('/search/?text=""&category="all"&page=1', productC.search)


module.exports = route;
