const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookie = require('cookie-parser');
var path = require('path')
var rfs = require('rotating-file-stream') // version 2.x

const config = require('./config');

// ******* setup ********

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

config.connectMongo();


var accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
})





// ********** Middlewares ***********

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookie());
app.use(morgan('combined', { stream: accessLogStream }));
app.use(cookie());






// ************ ROUTE MIDDLEWARES *********

app.use('/auth', require('./src/routes/auth.route'))



// ************ Listen **************
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`listening to the port ${PORT}`);
})
