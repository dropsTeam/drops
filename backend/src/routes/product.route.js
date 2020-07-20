const route = require('express').Router();
const userC = require('../controllers/user.mid');
const authC = require('../controllers/auth.mid');
const productC = require('../controllers/product.mid');
const reviewC = require('../controllers/reviews.mid');

route
    .get('/search', authC.googleVerify(true, false), productC.search)

route
    .post('/', authC.googleVerify(true, true), authC.isSeller, productC.postProduct)
    .put('/:productId', authC.googleVerify(true, true), productC.editProduct)
    .get('/:productId', authC.googleVerify(true, false), productC.get);

route
    .get('/review', authC.googleVerify(true, true), reviewC.getMyReview)
    .post('/review', authC.googleVerify(true, true), productC.basicProductInfo, reviewC.post)
    .get('/reviews', reviewC.get)
    
route
    .post('/review/helpful', authC.googleVerify(true, true), reviewC.helpfulPOST)
    .get('/review/helpful', authC.googleVerify(true, true), reviewC.amIInhelpful)
    .get('/review/helpfuls', reviewC.getHelpfuls)

module.exports = route;
