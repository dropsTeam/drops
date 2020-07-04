const route = require('express').Router();
const { googleVerify, log } = require('../controllers/auth.mid');
const { body } = require('express-validator');


route.post('/log', [body('token').exists().isString().escape().trim()], googleVerify, log)


module.exports = route;
