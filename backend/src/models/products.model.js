const mongo = require('mongoose');
const typ = mongo.Schema.Types;

mongo.set('runValidators', true);

const detailsSchema = mongo.Schema({
    key: {
        type: typ.String,
        maxlength: 100,
        required: true
    },
    value: {
        type: typ.String,
        maxlength: 1000,
        required: true
    }
});

// const mediaSchema = mongo.Schema({
//     url: {
//         type: typ.String,
//         maxlength: 500,
//         required: true
//     },

//     kind: {
//         type: typ.String,
//         enum: ['image', 'video']
//     }
// });

const varients = mongo.Schema({
    title: {
        type: typ.String,
        maxlength: 50,
        required: false
    },
    media: {
        type: typ.String,
        maxlength: 100,
        required: false
    }
});



const schema = mongo.Schema({
    title: {
        type: typ.String,
        required: true,
        maxlength: [300, '{PATH} exceeds the max length'],
        text: true
    },
    discription: {
        type: typ.String,
        required: true,
        maxlength: [100000, '{PATH} exceeds the max length'],
        text: true
    },

    highlights: [typ.String],

    details: [detailsSchema],

    timeStamp: {
        type: typ.Date,
        default: Date.now
    },

    media: [typ.String],

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
        required: true
    },
    category: {
        type: typ.String,
        required: true,
        maxlength: 50,
        enum: ['Men Clothing', 'Women Clothing', 'Men Shoes', 'Women Shoes', 'Camera, Photo & Video', 'Headphones & Speakers', 'Cellphone, Tablets & Accessories', 'Computers, Monitors & Laptops'],
        text: true
    }

});

schema.index({ discription: 'text' });

schema.index({ aveageRaing: 1, price: 1, timeStamp: 1 });

module.exports =  mongo.model('products', schema);
