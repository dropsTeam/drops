const route = require('express').Router();
const userC = require('../controllers/user.mid');
const authC = require('../controllers/auth.mid');
import { basicProductInfo } from '../controllers/product.mid';


route.get('/', authC.googleVerify(true), userC.get);

route
    .get('/cart', authC.googleVerify(true), userC.getCart)
    .post('/cart', authC.googleVerify(true), basicProductInfo, userC.postCart)

module.exports = route;
