const express = require('express');
const app = express();
const cors = require('cors');

const config = require('./config');


// ******* setup ********

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 
}

config.connectMongo();


// ********** Middlewares ***********

app.use(cors(corsOptions));



// ************ Listen **************
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening to the port ${PORT}`);
})
