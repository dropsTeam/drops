const route = require('express').Router();
const {googleVerify} = require('../controllers/auth.mid');

route.get('/google', (req, res, next) => {
    console.log('called GET');
    res.send("hello")
});

route.post('/google', (req, res, next) => {
    console.log('called POST')
    // console.log(req.body);
    res.send("hello")

});

route.post('/verify', googleVerify);

module.exports = route;
