const route = require('express').Router();
const userC = require('../controllers/user.mid');
const authC = require('../controllers/auth.mid');
const productC = require('../controllers/product.mid');

route
    .get('/search', productC.search);

route
    .post('/', authC.googleVerify(true), authC.isSeller, productC.postProduct)
    .put('/:productId', authC.googleVerify(true), productC.editProduct);



module.exports = route;
