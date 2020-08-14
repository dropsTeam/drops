const productModel = require('../models/products.model');
const userModel = require('../models/user.model');
const orderModal = require('../models/orders.model');
const { errorHandler } = require('../utils/ErrorHandler');


/*          HELPERS MIDDLEWARES      */

const basicProductInfo = async (req, res, next) => {

    try {

        let productId = (req.method === 'POST') ? req.body.productId : req.params.productId;

        const product = await productModel.findOne({ _id: productId }).select('title media varients dropdown aveageRaing totalReview price seller').lean();

        if (!!!product) { throw 'No Product Found with the given id!' };

        req.app.locals.product = product;

        next();

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Oops');
    }
}


const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        await productModel.remove({ _id: productId });
        await orderModal.remove({ productId, confirmed: false });
        res.status(200).send('ok');

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured deleting the product');
    }
}


const getbasicProductInfo = async (req, res, next) => {
    try {
        const { product } = req.app.locals;
        res.status(200).send('working...')

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Oops');
    }
}

const get = async (req, res, next) => {
    try {
        const { productId } = req.params;

        const product = await productModel.findOne({ _id: productId }).lean();

        if (Object.prototype.hasOwnProperty.call(req.app.locals, 'user') && !!product) {
            const userr = await userModel.findOne({ gId: req.app.locals.user.gId }).select('recommendations').lean();

            await userModel.findOneAndUpdate({ gId: req.app.locals.user.gId }, { $addToSet: { recommendations: productId } });

        }

        res.status(200).send(product);

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured fetching the product data.');

    }
}

const getSellerProducts = async (req, res) => {
    try {
        const { user } = req.app.locals;
        const { page } = req.params;
        console.log(page)

        const products = await productModel.find({ seller: user.gId }).sort('timeStamp').skip(page * 10).limit(10).lean();

        res.status(200).send(products);

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error occured while fetching the products.');
    }
}


const postProduct = async (req, res, next) => {
    try {
        const { user } = req.app.locals;
        const { title, description, details, highlights, media, dropdown, varients, price, category } = req.body;

        if (details.length > 20 || media.length != 5 || dropdown.options.length > 10 || varients.length > 10 || highlights.length > 10 || varients.length === 0 || dropdown.options.length === 0) throw 'Validation Error.';


        const payload = {
            seller: user.gId,
            title,
            description,
            highlights,
            details, media, dropdown, varients, price, category
        };

        const product = await productModel.create(payload);

        res.status(200).send(product);

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error occured while posting the products.');
    }
}

const editProduct = async (req, res, next) => {
    try {
        const { user } = req.app.locals;
        const { _id, title, description, highlights, details, media, dropdown, varients, price, category } = req.body;
        console.log(req.body);
        if (details.length > 20 || media.length != 5 || dropdown.options.length > 10 || varients.length > 10) throw 'Validation Error.';


        const payload = {
            title,
            description,
            details, media, dropdown, highlights, varients, price, category
        };

        const product = await productModel.findByIdAndUpdate({ _id, seller: user.gId }, payload);
        res.status(200).send(product);

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error occured while editing the products.');
    }
}


const search = async (req, res, next) => {
    try {


        let page = 0;
        let sortby = 'aveageRaing';
        let sortorder = -1;

        const payload = {
            $text: {
                $search: ''
            },

            price: { $gt: 0, $lt: 10000 }
        }


        if (req.query.hasOwnProperty('text')) {

            if (req.query.text.trim().length !== 0) {
                payload.$text.$search = req.query.text
            } else throw 'Text is required';
        } else {
            throw 'Text is required';
        }


        if (req.query.hasOwnProperty('sortby') && req.query.hasOwnProperty('sortorder')) {
            if (
                ['totalReview', 'aveageRaing', 'timeStamp', 'price'].includes(req.query.sortby),
                ['INC', 'DEC'].includes(req.query.sortorder)
            ) {
                sortby = req.query.sortby;
                sortorder = (req.query.sortorder === 'INC') ? -1 : 1;
            }
        }


        if (req.query.hasOwnProperty('category')) {
            payload.category = req.query.category;
        }

        if (req.query.hasOwnProperty('page')) {
            page = req.query.page;
        }

        if (req.query.hasOwnProperty('range')) {

            payload.price.$gt, payload.price.$lt = req.query.range.split("-");

            let splitRange = req.query.range.split("-")
            payload.price.$gt = splitRange[0];
            payload.price.$lt = splitRange[1];

        }



        const search = await productModel.find(payload, { score: { $meta: "textScore" } }).select('title media totalReview aveageRaing category price').sort({ [sortby]: [sortorder] }).skip(page * 20).limit(20).lean();



        if (Object.prototype.hasOwnProperty.call(req.app.locals, 'user') && search.length !== 0) {
            const history = await userModel.findOne({ gId: req.app.locals.user.gId }).select('searchHistory').lean();
            if (history.searchHistory.pop() !== req.query.text) {
                await userModel.findOneAndUpdate({ gId: req.app.locals.user.gId }, { $push: { searchHistory: req.query.text } });
            }
        }

        res.status(200).send(search);

    } catch (err) {
        console.log(err);
        errorHandler(res, 400, 'Error Occured searching for products.');
    }
}


module.exports = { basicProductInfo, getbasicProductInfo, postProduct, editProduct, search, get, getSellerProducts, deleteProduct };
