const mongo = require('mongoose');


module.exports = {

    auth: {
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID
    },
    connectMongo: () => {

        mongo.connect(process.env.CONNECT_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(_ => {
                console.log('Mongo Connected');
            }, err => {
                console.log(err);
            })
    }

}
