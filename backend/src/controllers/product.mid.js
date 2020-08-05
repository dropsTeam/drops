const productModel = require('../models/products.model');
const userModel = require('../models/user.model');

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
        res.status(500).send({ msg: 'Error Occured fetching the product info', err });
    }
}



const getbasicProductInfo = async (req, res, next) => {
    try {
        const { product } = req.app.locals;
        res.status(200).send('working...')

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured getting the product info' });
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
        res.status(500).send({ msg: 'Error Occured fetching the product data.', err });
    }
}

const getSellerProducts = async (req, res) => {
    try {
        const { user } = req.app.locals;

        const products = await productModel.find({ seller: user.gId }).lean();
        res.status(200).send(products);

    } catch (err) {
        console.log(err);
        res.status(400).send('oops')
    }
}


const postProduct = async (req, res, next) => {
    try {
        const { user } = req.app.locals;
        const { title, description, details, highlights, media, dropdown, varients, price, category } = req.body;

        if (details.length > 20 || media.length != 5 || dropdown.options.length > 10 || varients.length > 10 || highlights.length > 10) throw 'Validation Error.';


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
        res.status(500).send({ msg: 'Error Occured Posting the product info' });
    }
}

const editProduct = async (req, res, next) => {
    try {
        const { user } = req.app.locals;
        const { productId, title, description, highlights, details, media, dropdown, varients, price, category } = req.body;

        if (details.length > 20 || media.length != 5 || dropdown.options.length > 10 || varients.length > 10) throw 'Validation Error.';


        const payload = {
            title,
            description,
            details, media, dropdown, highlights, varients, price, category
        };

        const product = await productModel.findByIdAndUpdate({ _id: productId, seller: user.gId }, payload);
        req.status(200).send(product);

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured Editing the product.', err });
    }
}


const search = async (req, res, next) => {
    try {


        let page = 0;
        let sortby = 'aveageRaing';
        let sortorder = 1;

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
                sortorder = (req.query.sortorder === 'INC')? -1 : 1;
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
            if (history.searchHistory[-1] !== search) {
                await userModel.findOneAndUpdate({ gId: req.app.locals.user.gId }, { $push: { searchHistory: req.query.text } });
            }
        }

        res.status(200).send(search);

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured searching for products', err });
    }
}


module.exports = { basicProductInfo, getbasicProductInfo, postProduct, editProduct, search, get, getSellerProducts };
