const mongo = require('mongoose');
const typ = mongo.Schema.Types;

const schema = mongo.Schema({

    user: typ.String,
    seller: typ.String,
    productId: typ.ObjectId,
    title: {
        type: typ.String,
        maxlength: 300,
        required: true,
    },
    fullName: {
        type: typ.String,
        required: true
    },
    quantity: {
        type: typ.Number,
        max: 100,
        min: 1,
        default: 1,
        required: true

    },
    price: {
        type: typ.Number,
        min: 0,
        required: true
    },
    varients: {
        type: typ.String,
        required: true
    },
    dropdown: {
        title: {
            type: typ.String,
            required: true
        },
        options: {
            type: typ.String,
            required: true
        }
    },
    timeStamp: {
        type: typ.Date,
        default: Date.now
    },
    phoneNumber: {
        type: typ.Number,
        required: true
    },
    media: {
        type: typ.String,
        required: true
    },
    confirmed: {
        type: typ.Boolean,
        default: false
    },
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
