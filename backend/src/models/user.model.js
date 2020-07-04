const mongo = require('mongoose');
const types = mongo.Schema.Types;

const schema = new mongo.Schema({
    gId: {type: types.String},
    profilePic: { type: types.String },
    email: { type: types.String },
    fullName: { type: types.String }
});

module.exports = mongo.model('users', schema);
