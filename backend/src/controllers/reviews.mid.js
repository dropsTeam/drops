const reviewModel = require('../models/review.model');
const ordersModel = require('../models/orders.model');
const productModel = require('../models/products.model');

const get = async (req, res, next) => {
    try {
        const { productId, page } = req.query;

        const reviews = await reviewModel.find({ productId }).skip(page * 10).limit(10).lean();

        res.status(200).send(reviews);

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error occured while ' })
    }
}

const getMyReview = async (req, res, next) => {
    try {

        const { productId } = req.query;
        const myReview = await reviewModel.findOne({ user: app.locals.user._id, productId }).lean();

        res.status(200).send(myReview);

    } catch (err) {
        console.log(err);
        res.status(200).send({ msg: 'Error Occured getting your review.', err });
    }
}

const post = async (req, res, next) => {
    try {

        const { productId, rating, title, discription } = req.body;
        const { user, product } = req.app.locals;

        if (rating < 0 || rating > 5) throw 'Validation Error';

        const userOrder = await ordersModel.findOne({ user: user._id }).lean();

        if (!!!userOrder) throw 'Cannot post review hence this product have not been bought by this user.';

        const myReview = await ordersModel.findOne({ user: user._id, productId }).lean();

        if (!!myReview) throw 'You have already posted a review';

        const newRating = ((product.aveageRaing * product.totalReview) + rating) / (product.totalReview + 1);

        const newReview = reviewModel.create({ productId, rating, title, discription, user: user._id })

        await productModel.findOneAndUpdate({ _id: productId }, { aveageRaing: newRating, totalReview: product.totalReview + 1 });

        res.status(200).send(newReview);


    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured while posting the review' }, err);
    }
}

module.exports = { get, post, getMyReview }