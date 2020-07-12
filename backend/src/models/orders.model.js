const mongo = require('mongoose');
const typ = mongo.Schema.Types;

const schema = mongo.Schema({

    user: typ.ObjectId,
    productName: {
        productId: types.ObjectId,
        type: types.String,
        maxlength: 50,
        required: true,
    },
    quantity: {
        type: types.Number,
        max: 100,
        min: 1,
        default: 1
    },
    varient: {
        type: types.String,
        maxlength: 50
    },
    dropdown: [types.String],
    timeStamp: {
        type: types.Date,
        default: Date.now
    },
    phoneNumber: typ.Number,
    address: {
        location: {
            type: typ.String,
            maxlength: 500,
            required: true
        },
        city: {
            type: typ.String,
            maxlength: 50,
            required: true
        },
        country: {
            type: typ.String,
            maxlength: 50,
            required: true

        },
        state: {
            type: typ.String,
            maxlength: 50,
            required: true
        },
    }
});

schema.index({ timeStamp: 1 }, { unique: false });

module.exports = mongo.Schema('orders', schema);
