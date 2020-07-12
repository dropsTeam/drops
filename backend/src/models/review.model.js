const mongo = require('mongoose');
const typ = mongo.Schema.Types;

mongo.set('runValidators', true);

const schema = mongo.Schema({
    rating: {
        type: typ.Number,
        max: [5, 'Maximum rating is 5'],
        min: [1, 'Minimum rating is 1'],
        required: true
    },
    title: {
        type: typ.String,
        required: true,
        maxlength: [50, '{PATH} exceeds the max length']
    },
    timeStamp: {
        type: typ.Date,
        default: Date.now
    },
    discription: {
        type: typ.String,
        required: true,
        maxlength: [2000, '{PATH} exceeds the max length']
    },
    helpful: {
        type: typ.Number,
        min: 0,
        default: 0
    },
    
    helpfulMembers: [typ.ObjectId],

    user: typ.ObjectId
});


schema.index({ helpful: 1, rating: 1, timeStamp: 1 }, { unique: false });


module.export = mongo.model('review', schema);
