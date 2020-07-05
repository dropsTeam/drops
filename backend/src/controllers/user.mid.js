const userModel = require('../models/user.model');


const get = async (req, res, next) => {
    try {
    
        res.status(200).send({user: req.app.locals.user});
    
    }
    catch (err) {
        console.log(err);
        res.status(400).send({msg: 'Error Occured in fetching user'});
    }
}


module.exports = {get};
