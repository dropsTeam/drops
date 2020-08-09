const mongo = require('mongoose');


module.exports = {

    auth: {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '1092942175302-0ibod3kvsqd9861k4q88epeaa2q2t587.apps.googleusercontent.com'
    },
    connectMongo: () => {

        mongo.connect(process.env.CONNECT_STRING || 'mongodb+srv://jashan:jashan123@cluster0.huicb.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(_ => {
                console.log('Mongo Connected');
            }, err => {
                console.log(err);
            })
    }

}