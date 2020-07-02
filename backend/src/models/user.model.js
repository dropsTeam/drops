const mongo = require('mongoose');

const schema = new mongo.Schema({
    profilePic: { type: mongo.Schema.Types.String },
    email: { type: mongo.Schema.Types.String },
    password: { type: mongo.Schema.Types.String, maxlength: 200 }
});

module.exports = mongo.model('users', schema);
