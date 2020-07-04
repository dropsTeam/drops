const { OAuth2Client } = require('google-auth-library');
const config = require('../../config');
const { validationResult } = require('express-validator');

const client = new OAuth2Client(config.auth.GOOGLE_CLIENT_ID);


const userModel = require('../models/user.model');



const log = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {

        const { token } = req.body;
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
            httpOnly: false,
            domain: 'localhost'
        }).send(user);

    } catch (err) {
        res.status(400).send({ msg: 'Error Occured' });
    }
}




const googleVerify = async (req, res, next) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }


        const ticket = await client.verifyIdToken({
            idToken: req.body.token + '',
            audience: config.auth.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();

        console.log(req.app.locals);

        req.app.locals.user = {
            gId: payload['sub'],
            email: payload.email,
            fullName: payload.name,
            profilePic: payload.picture
        }

        next();

    }
    catch (err) {
        console.log(err);
        res.status(401).send({ msg: 'Token Unverified' });
    }
}


module.exports = { googleVerify, log };