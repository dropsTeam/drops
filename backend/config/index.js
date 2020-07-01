const mongo = require('mongoose');

module.exports = {
    connectMongo: () => {

        mongo.connect('mongodb+srv://jashan:jashan123@cluster0.huicb.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(_ => {
                console.log('Mongo Connected');
            }, err => {
                console.log(err);
            })
    }
}