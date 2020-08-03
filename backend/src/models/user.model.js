const mongo = require('mongoose');
const types = mongo.Schema.Types;




const schema = mongo.Schema({
    timeStamp: {
        type: types.Date,
        default: Date.now
    },
    searchHistory: [String],
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
        }

    },
    isSeller: {
        type: types.Boolean,
        default: false
    },
    seller: {
        name: {
            type: types.String,
            maxlength: 50,
            trim: true,
            default: ''
        },
        bio: {
            type: types.String,
            maxlength: 3000,
            trim: true,
            default: ''
        },
        profleImg: {
            type: types.String,
            default: 'Default',
            required: false
        }
    }
});



module.exports = mongo.model('users', schema);
