const mongo = require('mongoose');
const typ = mongo.Schema.Types;

mongo.set('runValidators', true);

const schema = new mongo.Schema({
    productId: {
        type: typ.ObjectId,
        required: true
    },
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
        required: false,
        maxlength: [2000, '{PATH} exceeds the max length']
    },
    helpful: {
        type: typ.Number,
        min: 0,
        default: 0
    },
    
    helpfulMembers: [typ.String],

    user: {
        fullName: {type: typ.String, required: true },
        gId: {type: typ.String, required: true}
    } 
});


schema.index({ projectId: 1, helpful: 1, rating: 1, timeStamp: 1 }, { unique: false });


module.exports = mongo.model('review', schema);
