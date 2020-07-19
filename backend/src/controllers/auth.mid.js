
const { OAuth2Client } = require('google-auth-library');
const config = require('../../config');
const userModel = require('../models/user.model');

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
            if(terminateIfError){
                res.status(401).send({ msg: 'Token Unverified' });
            }else {
                next();
            }
        }
    }
}

const isSeller = async (req, res, next) => {
    try {
        const { user } = req.app.locals;

        const userData = await userModel.findOne({gId: user.gId}).select('seller').lean();
        if(!!!userData.seller) throw 'Unauthorised';
        req.app.locals.user._id = userData._id;
        next();

    } catch (err) {
        console.log(err);
        res.status(401).send({ msg: 'Error Occured.', err })
    }
}


module.exports = { googleVerify, log, logout, isSeller };