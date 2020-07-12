const mongo = require('mongoose');
const typ = mongo.Schema.Types;

mongo.set('runValidators', true);

const detailsSchema = mongo.Schema({
    key: {
        type: typ.String,
        maxlength: 50,
        required: true
    },
    value: {
        type: typ.String,
        maxlength: 100,
        required: true
    }
});

const mediaSchema = mongo.Schema({
    url: {
        type: typ.String,
        maxlength: 500,
        required: true
    },

    kind: {
        type: typ.String,
        enum: ['image', 'video']
    }
});

const varients = mongo.Schema({
    title: {
        type: typ.String,
        maxlength: 50,
        required: true
    },
    media: [mediaSchema]
});



const schema = mongo.Schema({
    title: {
        type: typ.String,
        required: true,
        maxlength: [50, '{PATH} exceeds the max length']
    },
    discription: {
        type: typ.String,
        required: true,
        maxlength: [30000, '{PATH} exceeds the max length']
    },
    summary: {
        type: typ.String,
        required: true,
        maxlength: [2000, '{PATH} exceeds the max length']
    },

    tags: [{
        type: typ.String,
        maxlength: 20
    }],

    details: [detailsSchema],

    timeStamp: {
        type: typ.Date,
        default: Date.now
    },

    media: [mediaSchema],

    dropdown: {
        title: {
            type: typ.String,
            maxlength: 50,
            required: true
        },
        options: [{
            type: typ.String,
            maxlength: 50,
            required: true
        }]
    },

    varients: [varients],

    totalReview: {
        type: typ.Number,
        min: 0,
        default: 0
    },
    price: {
        type: typ.Number,
        min: 0,
        required: true
    },
    seller: {
        type: typ.String,
        required: true,
        maxlength: 50
    },
    category: {
        type: typ.String,
        required: true,
        maxlength: 50,
        enum: ['Men Clothing', 'Men Clothing', 'Men Shoes', 'Women Shoes', 'Camera, Photo & Video', 'Headphones & Speakers', 'Cellphone, Tablets & Accessories', 'Computers, Monitors & Laptops']
    }

});

schema.index({ totalReview: 1, title: 1 }, { unique: false });

module.exports = mongo.model('products', schema);
