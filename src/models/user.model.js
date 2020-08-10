const mongo = require('mongoose');
const types = mongo.Schema.Types;




const schema = mongo.Schema({
    timeStamp: {
        type: types.Date,
        default: Date.now
    },
    searchHistory: [{type: types.String, default: ['iPhone', 'Mobile'] }],
    recommendations: [{ type: types.ObjectId, ref: 'products' }],
    gId: { type: types.String },
    profilePic: { type: types.String },
    email: { type: types.String },
    fullName: { type: types.String },
    userAddress: {
        city: {
            type: types.String,
            maxlength: 200,
            default: ''
        },
        state: {
            type: types.String,
            maxlength: 200,
            default: ''
        },
        zipCode: {
            type: types.String,
            maxlength: 200,
            default: ''
        },
        landmark: {
            type: types.String,
            maxlength: 200,
            default: ''
        },
        address: {
            type: types.String,
            maxlength: 300,
            default: ''
        },

    },
    phoneNumber: {
        type: types.Number,
        default: 0
    },
    isSeller: {
        type: types.Boolean,
        default: false
    },
    seller: {
        name: {
            type: types.String,
            maxlength: 100,
            trim: true,
            default: ''
        },
        bio: {
            type: types.String,
            maxlength: 4000,
            default: 'No Bio'
        },
        profileImg: {
            type: types.String,
            default: 'Default',
            required: false
        }
    }
});



module.exports = mongo.model('users', schema);
