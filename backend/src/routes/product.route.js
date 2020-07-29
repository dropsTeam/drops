const route = require('express').Router();
const userC = require('../controllers/user.mid');
const authC = require('../controllers/auth.mid');
const productC = require('../controllers/product.mid');
const reviewC = require('../controllers/reviews.mid');
const qnaC = require('../controllers/qna.mid');

route
    .get('/search', authC.googleVerify(true, false), productC.search)

route
    .post('/', authC.googleVerify(true, true), authC.isSeller(false), productC.postProduct)
    .put('/p/:productId', authC.googleVerify(true, true), authC.isSeller(true), productC.editProduct)
    .get('/p/:productId', authC.googleVerify(true, false), productC.get);

route
    .get('/review', authC.googleVerify(true, true), reviewC.getMyReview)
    .post('/review', authC.googleVerify(true, true), productC.basicProductInfo, reviewC.post)
    .get('/reviews', reviewC.get)

route
    .get('/review/helpful', authC.googleVerify(true, true), reviewC.amIInhelpful)
    .post('/review/helpful', authC.googleVerify(true, true), reviewC.helpfulPOST)
    .delete('/review/helpful', authC.googleVerify(true, true), reviewC.helpfulDELETE)


module.exports = route;
