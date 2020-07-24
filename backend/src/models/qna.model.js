const mongo = require('mongoose');
const typ = mongo.Schema.Types;

mongo.set('runValidators', true);

const schema = new mongo.Schema({

    productId: {
        type: typ.ObjectId,
        ref:'products',
        required: true
    },
    question: {
        type: typ.String,
        maxlength: [100, '{PATH} exceeds the max length'],
        required: true
    },
    answer: {
        type: typ.String,
        maxlength: [2000, '{PATH} exceeds the max length'],
        required: false
    },
    timeStamp: {
        type: typ.Date,
        default: Date.now
    },
    user: {
        type: typ.String,
        required: true
    }
});

schema.index({ timeStamp: 1 }, { unique: false });


module.export = mongo.model('qna', schema);
