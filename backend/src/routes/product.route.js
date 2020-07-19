const route = require('express').Router();
const userC = require('../controllers/user.mid');
const authC = require('../controllers/auth.mid');
const productC = require('../controllers/product.mid');

route
    .get('/search', authC.googleVerify(true, false), productC.search)

route
    .post('/', authC.googleVerify(true, true), authC.isSeller, productC.postProduct)
    .put('/:productId', authC.googleVerify(true, true), productC.editProduct)
    .get('/:productId', authC.googleVerify(true, false), productC.get);



module.exports = route;
