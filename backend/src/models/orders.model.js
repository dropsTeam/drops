const mongo = require('mongoose');
const typ = mongo.Schema.Types;

const schema = mongo.Schema({

    user: typ.ObjectId,
    productId: typ.ObjectId,
    title: {
        type: typ.String,
        maxlength: 300,
        required: true,
    },
    quantity: {
        type: typ.Number,
        max: 100,
        min: 1,
        default: 1
    },
    price: {
        type: typ.Number,
        min: 0,
        required: true
    },
    varient: {
        type: typ.Mixed
    },
    dropdown: {
        type: typ.Mixed
    },
    timeStamp: {
        type: typ.Date,
        default: Date.now
    },
    phoneNumber: typ.Number,
    media: typ.String,

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

module.exports = mongo.model('orders', schema);
