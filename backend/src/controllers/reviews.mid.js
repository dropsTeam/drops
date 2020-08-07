const reviewModel = require('../models/review.model');
const ordersModel = require('../models/orders.model');
const productModel = require('../models/products.model');
const { errorHandler } = require('../utils/ErrorHandler');


const get = async (req, res, next) => {
    try {
        const { productId, page } = req.query;

        const reviews = await reviewModel.find({ productId }).sort('-helpful').skip(page * 10).limit(10).lean();
        res.status(200).send(reviews);

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured while fetching the reviews.');
    }
}

const getMyReview = async (req, res, next) => {
    try {
        const { productId } = req.query;
        const myReview = await reviewModel.findOne({ user: app.locals.user.gId, productId }).lean();

        res.status(200).send(myReview);

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured getting your review.');
    }
}

const post = async (req, res, next) => {
    try {

        let { productId, rating, title, discription } = req.body;

        const { user, product } = req.app.locals;

        rating = Math.ceil(rating);

        if (rating < 0 || rating > 5) return errorHandler(res, 400, 'Validation Error');

        // const userOrder = await ordersModel.findOne({ user: user.gId, confirmed: true }).lean();

        // if (!!!userOrder) return errorHandler(res, 400, 'Cannot post review hence this product have not been bought by this user.');

        const myReview = await reviewModel.findOne({ 'user.gId': user.gId, productId }).lean();

        if (!!myReview) return errorHandler(res, 400, 'You have already posted a review');

        const newRating = ((product.aveageRaing * product.totalReview) + rating) / (product.totalReview + 1);

        const newReview = await reviewModel.create({ productId, rating, title, discription, user: { gId: user.gId, fullName: user.fullName } })

        await productModel.findOneAndUpdate({ _id: productId }, { aveageRaing: newRating, totalReview: product.totalReview + 1 });

        res.status(200).send(newReview);


    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured while posting the review.');
        // res.status(400).send({ msg: 'Error Occured while posting the review' });
    }
}

const helpfulPOST = async (req, res, next) => {
    try {

        const { user } = req.app.locals;
        const { reviewId } = req.body;
        await reviewModel.findOneAndUpdate({ _id: reviewId }, { $addToSet: { helpfulMembers: user.gId }, $inc: { helpful: 1 } });

        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured POSTING the Job.');
    }
}

const helpfulDELETE = async (req, res, next) => {
    try {

        const { user } = req.app.locals;
        const { reviewId } = req.params;
        console.log(req.params);
        await reviewModel.findOneAndUpdate({ _id: reviewId }, { $pull: { helpfulMembers: user.gId }, $inc: { helpful: -1 } });

        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured while deleting the helphul.');
    }
}

const amIInhelpful = async (req, res, next) => {
    try {

        const { user } = req.app.locals;
        const { reviewId } = req.body;

        const isHelpful = reviewModel.findOne({ _id: reviewId, helpfulMembers: user.gId });

        if (!!isHelpful) {
            res.status(200).send({ helpful: true });
        } else {
            res.status(200).send({ helpful: false });
        }


    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Oops.');

    }
}



module.exports = { get, post, getMyReview, helpfulPOST, helpfulDELETE, amIInhelpful }