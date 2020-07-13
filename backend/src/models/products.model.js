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
        required: false
    },
    media: [mediaSchema]
});



const schema = mongo.Schema({
    title: {
        type: typ.String,
        required: true,
        maxlength: [200, '{PATH} exceeds the max length'],
        text: true
    },
    discription: {
        type: typ.String,
        required: true,
        maxlength: [10000, '{PATH} exceeds the max length'],
        text: true
    },
    summary: {
        type: typ.String,
        required: true,
        maxlength: [2000, '{PATH} exceeds the max length'],
        text: true
    },

    details: [detailsSchema],

    timeStamp: {
        type: typ.Date,
        default: Date.now
    },

    media: [mediaSchema],

    dropdown: {
        title: {
            type: typ.String,
            required: true,
            maxlength: 50
        },
        options: [{
            type: typ.String,
            required: true,
            maxlength: 50
        }]
    },

    varients: [varients],

    aveageRaing: {
        type: typ.Number,
        min: 0,
        max: 5,
        default: 0
    },
    price: {
        type: typ.Number,
        min: 0,
        required: true
    },
    seller: {
        type: typ.ObjectId,
        required: true,
        maxlength: 50
    },
    category: {
        type: typ.String,
        required: true,
        maxlength: 50,
        enum: ['Men Clothing', 'Women Clothing', 'Men Shoes', 'Women Shoes', 'Camera, Photo & Video', 'Headphones & Speakers', 'Cellphone, Tablets & Accessories', 'Computers, Monitors & Laptops'],
        text: true
    }

});

schema.index({ summary: 'text'});

schema.index({ aveageRaing: 1, price: 1, timeStamp: 1 });

module.exports = mongo.model('products', schema);
