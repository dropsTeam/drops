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
            type: typ.String,
            maxlength: 50,
            required: true
        },
        option: {
            type: typ.String,
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
    cart: [cartSchema]
});

cartSchema.index({ timeStamp: 1 }, { unique: false });


module.exports = mongo.model('users', schema);
