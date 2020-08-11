const userModel = require('../models/user.model');
const orderModel = require('../models/orders.model');
const productModal = require('../models/products.model');
const { errorHandler } = require('../utils/ErrorHandler');

const get = async (req, res, next) => {
    try {
        const { user } = req.app.locals;
        const userData = await userModel.findOne({ gId: user.gId }).select('gId profilePic phoneNumber email fullName isSeller seller userAddress timeStamp').lean();
        res.status(200).send(userData);
    }
    catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured in fetching user');
    }
};

const editProfile = async (req, res) => {
    try {
        const { details } = req.body;
        const { user } = req.app.locals;

        const update = {
            userAddress: {
                city: details.city,
                state: details.state,
                zipCode: details.zipCode,
                landmark: details.landmark,
                address: details.address
            },
            phoneNumber: details.phoneNumber
        }


        await userModel.findOneAndUpdate({ gId: user.gId }, update);

        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured editing the profile.');
    }
}


const getCart = async (req, res, next) => {

    try {

        const { user } = req.app.locals;

        const cart = await await orderModel.find({ user: user.gId, confirmed: false }).sort('-timeStamp').lean();

        res.status(200).send(cart);

    }
    catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured in fetching user.');
    }
};



function postCart(isNext) {
    return async (req, res, next) => {
        try {
            const { user, product } = req.app.locals;
            const { productId, quantity, dropdown, varients } = req.body;

            const payload = {

                user: user.gId,

                title: product.title,
                price: product.price,
                media: product.media[0],
                seller: product.seller,
                productId,
                quantity,
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

            if (!isValid && !product.dropdown.options.includes(dropdown.options)) throw 'Validation Error';

            console.log(payload)
            const order = await orderModel.create(payload);
            if (isNext) next();

            res.status(200).send(order);

        } catch (err) {
            console.log(err);
            errorHandler(res, 400, 'Error occured while posting cart.');
        }
    }
}



const deleteCartItem = async (req, res, next) => {
    try {

        const { user } = req.app.locals;
        const { cartId } = req.params;

        const where = { confirmed: false, user: user.gId };

        if (cartId != -1) {
            where._id = cartId;
        }
        await orderModel.remove(where).lean();


        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured while deleting the cart.');
    }
}



const editCart = async (req, res, next) => {
    try {

        const { user } = req.app.locals;
        const { cartId, quantity } = req.body;

        await orderModel.findByIdAndUpdate({ seller: user.gId, confirmed: false, _id: cartId }, { quantity });
        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured while editing the cart.');
    }
}


const getSearchHistory = async (req, res, next) => {
    try {
        const { user } = req.app.locals;

        const history = await userModel.findOne({ gId: user.gId }).select('searchHistory').slice('searchHistory', -10).lean();
        res.status(200).send(history.searchHistory.reverse());

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured fetching the search history.');
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
        errorHandler(res, 400, 'Error Occured getting the recommendations.');
    }
}


const getSellerStats = async (req, res, next) => {
    try {
        const { user } = req.app.locals;

        const totalRevenue = await orderModel.aggregate([
            {
                $match: {
                    seller: user.gId,
                    confirmed: true
                }
            },
            {
                $group: {
                    _id: null,
                    totalSaleAmount: { $sum: '$price' },
                    totalOrders: { $sum: 1 }
                }
            }
        ]);

        const totalProducts = await productModal.aggregate([
            {
                $match: {
                    seller: user.gId
                }
            },
            {
                $group: {
                    _id: null,
                    totalProducts: { $sum: 1 }
                }
            }

        ]);

        if (totalProducts.length === 0) { totalProducts.push({ totalProducts: 0 }) }
        if (totalRevenue.length === 0) { totalRevenue.push({ totalOrders: 0, totalSaleAmount: 0 }) }

        res.status(200).send({ totalProducts: totalProducts[0].totalProducts, totalOrders: totalRevenue[0].totalOrders, totalSaleAmount: totalRevenue[0].totalSaleAmount });

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Oops.');
    }
}

const editSeller = async (req, res, next) => {
    try {
        const { user } = req.app.locals;
        const { sellerData } = req.body;

        const update = {
            seller: {
                name: sellerData.name,
                bio: sellerData.bio,
                profileImg: sellerData.profileImg
            }
        };

        await userModel.findOneAndUpdate({ gId: user.gId }, update);

        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured while editing the profile.');
    }
}
 


module.exports = { get, editProfile, getCart, postCart, deleteCartItem, editCart, getSearchHistory, getRecommendedItems, getSellerStats, editSeller };
