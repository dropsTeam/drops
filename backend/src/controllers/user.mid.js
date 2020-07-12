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

        res.status(200).send(cart.cart);

    }
    catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Error Occured in fetching user' });
    }
};



const postCart = async (req, res, next) => {
    try {

        const { productId, quantity, varient, dropdown } = req.body;
        const { product, user } = req.app.locals;

        let isVarientValid = false;
        for (const _varient of product.varient) {
            if (varient.title === _varient.title) { isVarientValid = true; varient = _varient; break; };
        }

        if (!isVarientValid) { throw 'Not a valid varient' };
        if (dropdown.title !== product.dropdown.title || !product.dropdown.options.includes(dropdown.option)) { throw 'Not a valid dropdown value' };

        const userData = await userModel.findById(user._id).select('cart').lean();

        if (userData.cart.length >= 10) {
            throw 'Your cart is already full, You cannot put more than 10 items.'
        }

        const update = {
            $push: {
                cart: {
                    productId,
                    quantity,
                    varient,
                    dropdown
                }
            }
        };
        userData.cart.push({
            productId,
            quantity,
            varient,
            dropdown,
            timeStamp: Date.now()
        });

        await userModel.findByIdAndUpdate(user._id, update);
        res.status(200).send({ cart: userData.cart });

    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Error Occured posting the cart ', err });
    }
};

module.exports = { get, getCart, postCart };
