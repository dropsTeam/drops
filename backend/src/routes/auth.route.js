const route = require('express').Router();
const { googleVerify, log, logout } = require('../controllers/auth.mid');


route.post('/log', googleVerify(false, true) , log);
route.post('/logout', googleVerify(true, true), logout);

module.exports = route;
