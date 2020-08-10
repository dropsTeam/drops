const orderModel = require('../models/orders.model');
const { errorHandler } = require('../utils/ErrorHandler');


const post = async (req, res) => {
    try {

        const { user } = req.app.locals;
        const { cartId } = req.body;

        await orderModel.findOneAndUpdate({ user: user.gId, _id: cartId }, { confirmed: true, timeStamp: Date.now() });
        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occures while posting the order.');
    }
}

const getSellerOrders = async (req, res) => {

    try {
        const { user } = req.app.locals;
        const { page } = req.params;

        const orders = await orderModel.find({ seller: user.gId, confirmed: true }).sort('timeStamp').skip(page * 30).limit(30).lean();
        res.status(200).send(orders);

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occures while getting the order.');
    }
}

const get = async (req, res) => {

    try {
        const { user } = req.app.locals;
        const { page } = req.params;

        const orders = await orderModel.find({ user: user.gId, confirmed: true }).sort('timeStamp').skip(page * 20).limit(30).lean();
        res.status(200).send(orders);
    }
    catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occures while getting the order.');
    }
}



module.exports = { post, getSellerOrders, get };