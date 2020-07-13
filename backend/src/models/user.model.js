const mongo = require('mongoose');
const types = mongo.Schema.Types;

const cartSchema = mongo.Schema({
    productId: {
        type: types.ObjectId,
        required: true
    },

    quantity: {
        type: types.Number,
        max: 100,
        min: 1,
        default: 1
    },
    varient: {
        type: types.Number,
        min: 0
    },
    dropdown: {
        title: {
            type: types.String,
            maxlength: 50,
            required: true
        },
        option: {
            type: types.String,
            maxlength: 50,
            required: true
        }
    },
    timeStamp: {
        type: types.Date,
        default: Date.now
    }
});


const schema = mongo.Schema({
    gId: { type: types.String },
    profilePic: { type: types.String },
    email: { type: types.String },
    fullName: { type: types.String },
    cart: [cartSchema],
    seller: {
        name: {
            type: types.String,
            required: false,
            maxlength: 50,
            unique: true
        },
        discription: {
            type: types.String,
            maxlength: 1000,
            default: 'No Discription'
        }
    }
});

cartSchema.index({ timeStamp: 1, gId: 1 }, { unique: false });


module.exports = mongo.model('users', schema);
