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


// var accessLogStream = rfs.createStream('access.log', {
//     interval: '1d', // rotate daily
//     path: path.join(__dirname, 'log')
// })

// var corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
// }




// ********** Middlewares ***********

app.use(helmet());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(morgan('combined', { stream: accessLogStream }));
app.use(cookie());





// ************ ROUTE MIDDLEWARES *********


app.use('/api/auth', require('./src/routes/auth.route'));
app.use('/api/user', require('./src/routes/user.route'));
app.use('/api/products', require('./src/routes/product.route'));


// ************ Listen **************

const cluster = require('cluster');
const numCPU = require('os').cpus().length;
const PORT = process.env.PORT || 8080;

if (cluster.isMaster) {
    console.log('this is a master process: ', process.pid);
    for (let i = 0; i < numCPU; i++) {
        cluster.fork();
    }
    cluster.on('exit', worker => {
        console.log(`worker ${process.pid} had died`);
        cluster.fork();
    })
} else {
    console.log('this is a worker process: ', process.pid);
}

app.listen(PORT, () => {
    console.log(`listening to the port ${PORT}`);
});


