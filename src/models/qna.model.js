const mongo = require('mongoose');
const typ = mongo.Schema.Types;

mongo.set('runValidators', true);

const schema = new mongo.Schema({

    productId: {
        type: typ.ObjectId,
        ref: 'products',
        required: true
    },
    question: {
        type: typ.String,
        maxlength: [500, '{PATH} exceeds the max length'],
        required: true
    },
    answer: {
        type: typ.String,
        maxlength: [5000, '{PATH} exceeds the max length'],
        default: ''
    },
    timeStamp: {
        type: typ.Date,
        default: Date.now
    },
    user: {
        fullName: typ.String,
        gId: typ.String
    },
    seller: {
        type: typ.String
    }
});


module.exports = mongo.model('qna', schema);
