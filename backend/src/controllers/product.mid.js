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
        const {user} = req.app.locals;
        const {title, discription, summary, tags, details, media, dropdown, varients, price, category} = req.body;
        
        if(tags.length > 20 || details.length > 20 ||  media.length != 5 || dropdown.options.length > 10 || varients.length > 10  ) throw 'Validation Error.';


        const payload = {
            seller: user._id,
            title,
            discription,
            summary,
            tags,
            details, media, dropdown, varients, price, category
        }
        const product = await productModel.create(payload);

        res.status(200).send(product);

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured Posting the product info' });
    }
}


module.exports = { basicProductInfo, getbasicProductInfo, postProduct };
