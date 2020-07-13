const productModel = require('../models/products.model');


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


const postProduct = async (req, res, next) => {
    try {
        const { user } = req.app.locals;
        const { title, discription, summary, details, media, dropdown, varients, price, category } = req.body;

        if (details.length > 20 || media.length != 5 || dropdown.options.length > 10 || varients.length > 10) throw 'Validation Error.';


        const payload = {
            seller: user._id,
            title,
            discription,
            summary,
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
        const { productId, title, discription, summary, details, media, dropdown, varients, price, category } = req.body;

        if (details.length > 20 || media.length != 5 || dropdown.options.length > 10 || varients.length > 10) throw 'Validation Error.';


        const payload = {
            title,
            discription,
            summary,
            details, media, dropdown, varients, price, category
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

        let category = '';
        let page = 1;


        if (!req.query.hasOwnProperty('text')) throw 'Text is required';
        if (req.query.text.trim().length === 0) throw 'Text is required';

        if (!req.query.hasOwnProperty('category')) {
            category = 'all';
        }
        if (!req.query.hasOwnProperty('page')) {
            page = 1;
        }
        // if(category !== 'all') {payload.category = category};
        
        const payload = {
            $text: {
                $search: req.query.text
            }
        }

        const search = await productModel.find(payload).select('title media totalReview price').skip(page*20).limit(20).lean();
        res.status(200).send(search);

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured searching for products', err });
    }
}


module.exports = { basicProductInfo, getbasicProductInfo, postProduct, editProduct, search };
