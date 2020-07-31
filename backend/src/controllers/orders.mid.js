const orderModel = require('../models/orders.model');

const post = async (req, res) => {
    try {

        const { user } = req.app.locals;
        const { cartId } = req.body;

        await orderModel.findOneAndUpdate({ user: user.gId, _id: cartId }, { confirmed: true, timeStamp: Date.now });
        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error Occured while posting order');
    }
}

module.exports = { post };