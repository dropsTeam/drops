const route = require('express').Router();
const authC = require('../controllers/auth.mid');
const qnaC = require('../controllers/qna.mid');

route
    .get('/', qnaC.get)   // required to have page= query 
    .post('/answer', authC.googleVerify(true, true), authC.isSeller, qnaC.postA)
    .post('/question', authC.googleVerify(true, true), qnaC.postQ)

module.exports = route;
