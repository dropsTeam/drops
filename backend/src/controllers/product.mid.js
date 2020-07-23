const productModel = require('../models/products.model');
const userModel = require('../models/user.model');

/*          HELPERS MIDDLEWARES      */

const basicProductInfo = async (req, res, next) => {

    try {
        const { productId } = (req.method === 'POST') ? req.body : req.params;

        const product = await productModel.findOne({ _id: productId }).select('title media varients dropdown totalReview price seller').lean();

        if (!!!product) { throw 'No Product Found with the given id!' };

        req.app.locals.productInfo = product;

        next();

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured fetching the product info', err });
    }
}





/*          MIDDLEWARES       */

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

        if (req.app.locals.hasOwnProperty('user') && !!product) {
            await userModel.findOneAndUpdate({ gId: req.app.locals.user.gId }, { $push: { recommendations: productId } });
        }

        res.status(200).send(product);

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured fetching the product data.', err });
    }
}


const postProduct = async (req, res, next) => {
    try {
        const { user } = req.app.locals;
        const { title, discription, details, highlights, media, dropdown, varients, price, category } = req.body;

        if (details.length > 20 || media.length != 5 || dropdown.options.length > 10 || varients.length > 10) throw 'Validation Error.';


        
        const payload = {
            seller: user.gId,
            title,
            discription,
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
        const { productId, title, discription, highlights, details, media, dropdown, varients, price, category } = req.body;

        if (details.length > 20 || media.length != 5 || dropdown.options.length > 10 || varients.length > 10) throw 'Validation Error.';


        const payload = {
            title,
            discription,
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


        let page = 1;
        let sortby = 'aveageRaing';
        let sortorder = 1;

        const payload = {
            $text: {
                $search: ''
            },
            price: { $gt: 0, $lt: 10000000 }
        }


        if (req.query.hasOwnProperty('text')) {
            if (req.query.text.trim().length === 0) {
                payload.$text.$search = req.query.text;
            } else throw 'Text is required';
        } else {
            throw 'Text is required';
        }


        if (req.query.hasOwnProperty('sortby') && req.query.hasOwnProperty('sortorder')) {
            if (
                ['aveageRaing', 'timeStamp', 'price'].includes(req.query.sortby),
                ['INC', 'DEC'].includes(req.query.sortorder)
            ) {
                sortby = req.query.sortby;
                sortorder = (req.query.sortorder === 'INC') ? 1 : -1;
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
        }

        // if(category !== 'all') {payload.category = category};


        // ((Overall Rating * Total Rating) + new Rating) / (Total Rating + 1);

        const search = await productModel.find(payload).select('title media totalReview price').sort({ totalReview: 1, [sortby]: [sortorder] }).skip(page * 20).limit(20).lean();

        if (req.app.locals.hasOwnProperty('user') && search.length !== 0) {
            await userModel.findOneAndUpdate({ gId: user.gId }, { $push: { searchHistory: req.query.text } });
        }

        res.status(200).send(search);

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured searching for products', err });
    }
}


module.exports = { basicProductInfo, getbasicProductInfo, postProduct, editProduct, search, get };
