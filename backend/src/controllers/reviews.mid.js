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
        const myReview = await reviewModel.findOne({ user: app.locals.user.gId, productId }).lean();

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

        const userOrder = await ordersModel.findOne({ user: user.gId }).lean();

        if (!!!userOrder) throw 'Cannot post review hence this product have not been bought by this user.';

        const myReview = await ordersModel.findOne({ user: user.gId, productId }).lean();

        if (!!myReview) throw 'You have already posted a review';

        const newRating = ((product.aveageRaing * product.totalReview) + rating) / (product.totalReview + 1);

        const newReview = reviewModel.create({ productId, rating, title, discription, user: user.gId })

        await productModel.findOneAndUpdate({ _id: productId }, { aveageRaing: newRating, totalReview: product.totalReview + 1 });

        res.status(200).send(newReview);


    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured while posting the review' }, err);
    }
}

const helpfulPOST = async (req, res, next) => {
    try {

        const { user } = req.app.locals;
        const { reviewId } = req.body;
        await ordersModel.findOneAndUpdate({ _id: reviewId }, { $addToSet: { helpfulMembers: user.gId } });

        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Error Occured POSTING the Job', err });
    }
}

const amIInhelpful = async (req, res, next) => {
    try {

        const { user } = req.app.locals;
        const { reviewId } = req.body;

        const isHelpful = ordersModel.findOne({ _id: reviewId, helpfulMembers: user.gId });

        if (!!isHelpful) {
            res.status(200).send({ helpful: true });
        } else {
            res.status(200).send({ helpful: false });
        }


    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Error Occured figuring out if you said this review was helphul or not earlier.', err });
    }
}

const getHelpfuls = async (req, res, next) => {
    try {

        const count = await reviewModel.aggregate({$project: {count: {$size: '$helpfulMembers'}}});
        res.status(200).send(count)

    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: 'Error Occured getting all helpfuls.', err });
    }
}

module.exports = { get, post, getMyReview, helpfulPOST, amIInhelpful, getHelpfuls }