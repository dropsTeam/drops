const productModel = require('../models/products.model');


/*          HELPERS MIDDLEWARES      */

const basicProductInfo = async (req, res, next) => {

    try {
        const { productId } = (req.method === 'POST')? req.body: req.params;

        const product = await productModel.findOne({ _id: productId }).select('title media varients dropdown totalReview price seller').lean();
        
        if(!!!product) {throw 'No Product Found with the given id!'};

        req.app.locals.productInfo = product;

        next();

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured fetching the product info', err});
    }
}





/*          MIDDLEWARES       */

const getbasicProductInfo = async (res, res, next) => {
    try {
        const { product } = req.app.locals;
        

    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error Occured getting the product info' });
    }
}


module.exports = { basicProductInfo, getbasicProductInfo };
