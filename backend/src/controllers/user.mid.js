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



const deleteCartItem = async (req, res, next) => {
    try {

        const { user } = req.app.locals;
        const { index } = req.params;

        const cartData = await userModel.findById(user._id).select('cart').lean();


        if (index < 0) {
            cartData.cart = []
        } else {
            if (index >= cartData.cart.length) { throw `No such element with index ${index} found in cart` };
            cartData.cart.splice(index, 1);
        }

        const update = {
            cart: cartData.cart
        }

        await userModel.findByIdAndUpdate(user._id, update);
        res.status(200).send({ cart: cartData.cart })

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured while deleting the cart.', err })
    }
}



const editCart = async (req, res, next) => {
    try {

        const { user } = req.app.locals;
        const { quantity, index } = req.body;

        const cartData = await userModel.findById(user._id).select('cart').lean();
        if (index >= cartData.cart.length || index < 0) throw `No such element with index ${index} found in cart`;

        const key = 'cart.' + index + '.quantiry';
        userModel.findByIdAndUpdate(user._id, { $set: { [key]: quantity } });


    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured while editing the cart.', err })
    }
}


const getSearchHistory = async (req, res, next) => {
    try {
        const { user } = req.app.locals;

        const history = await userModel.findOne({ gId: user.gId }).select('searchHistory').slice('searchHistory', -10).lean();
        res.status(200).send(history.searchHistory);

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured fetching the search history', err });
    }
}

const getRecommendedItems = async (req, res, next) => {
    try {
        const { user } = req.app.locals;

        const recommendations = await userModel.findOne({ gId: user.gId }).select('recommendations').splice('recommendations', -8).populate({ path: 'recommendations', ref: 'products', select: 'title price totalReview seller aveageRaing media' });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured getting the recommendations .' })
    }
}

module.exports = { get, getCart, postCart, deleteCartItem, editCart, getSearchHistory, getRecommendedItems };
