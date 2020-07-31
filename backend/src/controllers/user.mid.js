const userModel = require('../models/user.model');
const orderModel = require('./../models/orders.model');

const get = async (req, res, next) => {
    try {
        const { user } = req.app.locals;
        const userData = await userModel.findOne({ gId: user.gId }).select('gId profilePic email fullName isSeller seller userAddress').lean();
        res.status(200).send(userData);
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Error Occured in fetching user' });
    }
};


const getCart = async (req, res, next) => {

    try {

        const { user } = req.app.locals;

        const cart = await await orderModel.find({ user: user.gId, confirmed: false }).lean();

        res.status(200).send(cart);

    }
    catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Error Occured in fetching user' });
    }
};



function postCart(isNext) {
    return async (req, res, next) => {
        try {
            const { user, product } = req.app.locals;
            const { productId, quantity, address, phoneNumber, dropdown, varients } = req.body;

            const payload = {
                user: user.gId,
                address: {
                    location: address.location,
                    city: address.city,
                    country: address.country,
                    state: address.state
                },
                title: product.title,
                price: product.price,
                media: product.media,
                productId,
                quantity,
                phoneNumber,
                fullName: user.fullName,
                dropdown: {
                    title: dropdown.title,
                    options: dropdown.options
                },
                varients
            }

            let isValid = false;


            for (const _varient of product.varients) {
                if (varients === _varient.title) { isValid = true; payload.media = _varient.media; break; };
            }

            if (!isValid && !product.dropdown.options.includes(dropdown)) throw 'Validation Error';

            const order = await orderModel.create(payload);
            if (isNext) next();

            res.status(200).send(order);

        } catch (err) {
            console.log(err);
            res.status(500).send('Error occured while posting cart');
        }
    }
}



const deleteCartItem = async (req, res, next) => {
    try {

        const { user } = req.app.locals;
        const { cartId } = req.body;

        await orderModel.remove({ _id: cartId, confirmed: false, user: user.gId }).lean();

        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured while deleting the cart.', err })
    }
}



const editCart = async (req, res, next) => {
    try {

        const { user } = req.app.locals;
        const { cartId, quantity } = req.body;

        await orderModel.findByIdAndUpdate({ seller: user.gId, confirmed: false, _id: cartId }, { quantity });
        res.state(200).send('ok');

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

        const recommendations = await userModel.findOne({ gId: user.gId })
            .slice('recommendations', -10)
            .select('recommendations')
            .populate({
                path: 'recommendations',
                ref: 'products',
                select: 'title price totalReview seller aveageRaing media'
            });

        res.status(200).send(recommendations);

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured getting the recommendations .' })
    }
}



module.exports = { get, getCart, postCart, deleteCartItem, editCart, getSearchHistory, getRecommendedItems };
