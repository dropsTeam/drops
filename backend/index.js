const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookie = require('cookie-parser');

const config = require('./config');


// ******* setup ********

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
}

config.connectMongo();



// ********** Middlewares ***********

app.use(helmet());
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(morgan('combined'));
app.use(cookie());


// ************ ROUTE MIDDLEWARES *********




// ************ Listen **************
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`listening to the port ${PORT}`);
})
