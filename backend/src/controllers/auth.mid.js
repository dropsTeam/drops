
const { OAuth2Client } = require('google-auth-library');
const config = require('../../config');


const client = new OAuth2Client(config.auth.GOOGLE_CLIENT_ID);

const signInOrRegister = async (req, res, next) => {

    try {


        const token = req.locals.user;

        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 2);


        res.cookie('auth-token', token, {
            expires: expireDate,
            secure: false,
            httpOnly: false,
            domain: 'localhost'
        }).send({ success: true });

    } catch (err) {

    }
}


const googleVerify = async (req, res, next) => {

    try {

        const ticket = await client.verifyIdToken({
            idToken: req.body.token + '',
            audience: config.auth.GOOGLE_CLIENT_ID,
        });

        req.locals.user = {
            email: ticket.email,
            name: ticket.name,
            picture: ticket.picture
        }

        next();

    }
    catch (err) {
        console.log(err);
        res.status(401).send({ msg: 'Token Unverified' });
    }
}


module.exports = { googleVerify };