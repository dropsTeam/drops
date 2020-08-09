const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var path = require('path')
var rfs = require('rotating-file-stream')
const config = require('./config');
const cookie = require('cookie-parser');


// ******* setup ********

const app = express();
app.set('trust proxy', 1) // trust first proxy
app.disable('x-powered-by')


config.connectMongo();


// ********** Middlewares ***********

app.use(helmet());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookie());





// ************ ROUTE MIDDLEWARES *********


app.use('/api/auth', require('./src/routes/auth.route'));
app.use('/api/user', require('./src/routes/user.route'));
app.use('/api/products', require('./src/routes/product.route'));
app.use('/api/qna', require('./src/routes/qna.route'));
app.use('/api/orders', require('./src/routes/order.route'));

// ************ Listen **************



if (process.env.NODE_ENV === 'production') {

    var accessLogStream = rfs.createStream('access.log', {
        interval: '1d', // rotate daily
        path: path.join(__dirname, 'log')
    });
    app.use(morgan('combined', { stream: accessLogStream }));

    app.use(express.static('public/build'));
    app.get('*', (req, res, next) => {
        res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'));
    });

} else {
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`listening to the port ${PORT}`);
});


