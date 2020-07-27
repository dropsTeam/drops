const mongo = require('mongoose');
const types = mongo.Schema.Types;


const cartSchema = new mongo.Schema({
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
    },
    searchHistory: [mongo.Schema({ type: types.String })],
    recommendations: [mongo.Schema({ type: types.ObjectId })]
});


const schema = mongo.Schema({
    gId: { type: types.String },
    profilePic: { type: types.String },
    email: { type: types.String },
    fullName: { type: types.String },
    cart: [cartSchema],
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
            maxlength: 200,
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
            required: false,
            maxlength: 50,
            trim: true,
            unique: true
        },
        bio: {
            type: types.String,
            maxlength: 1000,
            trim: true,
            required: false
        },
        profleImg: {
            type: types.String,
            default: 'Default',
            required: false
        }
    }
});

cartSchema.index({ gId: 1 }, { unique: true });


module.exports = mongo.model('users', schema);
