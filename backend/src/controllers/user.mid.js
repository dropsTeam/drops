const userModel = require('../models/user.model');


const get = async (req, res, next) => {
    try {
        res.status(200).send({ user: req.app.locals.user });
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Error Occured in fetching user' });
    }
};

const getCart = async (req, res, next) => {

    try {

        const { _id } = req.app.locals.user;

        const cart = await await userModel.findById(_id).select('cart').lean();

        res.status(200).send(cart);

    }
    catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Error Occured in fetching user' });
    }
};



module.exports = { get, getCart };
