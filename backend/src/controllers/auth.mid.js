
const { OAuth2Client } = require('google-auth-library');
const config = require('../../config');
const userModel = require('../models/user.model');
const productModel = require('../models/products.model');
const client = new OAuth2Client(config.auth.GOOGLE_CLIENT_ID);



const log = async (req, res, next) => {

    try {


        const { token } = req.app.locals;
        const { user } = req.app.locals;


        const isUser = await userModel.findOne({ gId: user.gId });
        if (!!!isUser) {
            await userModel.create(user);
        }

        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 2);


        res.cookie('auth-token', token, {
            expires: expireDate,
            secure: false,
            httpOnly: true,
            sameSite: true
        }).send(user);


    } catch (err) {
        console.log(err)
        res.status(400).send({ msg: 'Error Occured' });
    }
}



const logout = async (req, res, next) => {
    try {
        res.clearCookie('auth-token').send('ok');

    } catch (err) {
        res.status(400).send({ message: err })
    }
}



function googleVerify(fromCookie, terminateIfError = true) {
    return async (req, res, next) => {

        try {

            const token = (fromCookie) ? req.cookies['auth-token'] : req.body.token;


            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: config.auth.GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload();


            req.app.locals.user = {
                gId: payload['sub'],
                email: payload.email,
                fullName: payload.name,
                profilePic: payload.picture
            }

            req.app.locals.token = token;

            next();

        }
        catch (err) {
            console.log(err);
            if (terminateIfError) {
                res.status(401).send({ msg: 'Token Unverified' });
            } else {
                next();
            }
        }
    }
}

function isSeller(checkOwnership = false) {
    return async (req, res, next) => {
        try {


            const { user } = req.app.locals;

            const userData = await userModel.findOne({ gId: user.gId }).select('isSeller').lean();
            if (!userData.isSeller) throw 'Unauthorised';

            if (checkOwnership) {
                const { productId } = (req.methods === 'GET') ? req.params : req.body;
                const ownerShip = productModel.findOne({ _id: productId, seller: user.gId })
                if (!!!ownerShip) throw 'You are unauthorised to ao any operations on this product';
            }

            req.app.locals.user._id = userData._id;


            next();

        } catch (err) {
            console.log(err);
            res.status(401).send({ msg: 'Error Occured.', err })
        }
    }
}


const signUpAsSeller = async (req, res, next) => {
    try {

        const { name, bio, profileImg } = req.body;
        const { user } = req.app.locals;


        const update = { 'seller.name': name, 'seller.bio': bio, 'seller.profileImg': profileImg, isSeller: true }

        await userModel.findOneAndUpdate({ gId: user.gId }, update);
        res.status(200).send(update);

    } catch (err) {
        res.status(400).send({ msg: 'Error Occured signing up as seller', err });
    }
}


module.exports = { googleVerify, log, logout, isSeller, signUpAsSeller };