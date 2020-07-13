const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var path = require('path')
var rfs = require('rotating-file-stream') // version 2.x
const config = require('./config');
const cookie = require('cookie-parser');

// ******* setup ********

const app = express();
app.set('trust proxy', 1) // trust first proxy
app.disable('x-powered-by')


config.connectMongo();


var accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
})

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
// }




// ********** Middlewares ***********

app.use(helmet());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined', { stream: accessLogStream }));
app.use(cookie());







// ************ ROUTE MIDDLEWARES *********


app.use('/api/auth', require('./src/routes/auth.route'));
app.use('/api/user', require('./src/routes/user.route'));
app.use('/api/products', require('./src/routes/product.route'));

// ************ Listen **************
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`listening to the port ${PORT}`);
})
