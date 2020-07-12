const mongo = require('mongoose');
const typ = mongo.Schema.Types;

mongo.set('runValidators', true);

const schema = mongo.Schema({

    question: {
        type: typ.String,
        maxlength: [100, '{PATH} exceeds the max length'],
        required: true
    },
    answer: {
        type: typ.String,
        maxlength: [2000, '{PATH} exceeds the max length'],
        required: true
    },
    timeStamp: {
        type: typ.Date,
        default: Date.now
    }
});

schema.index({ timeStamp: 1 });


module.export = mongo.model('qna', schema);
