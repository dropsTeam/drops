const express = require('express');
const app = express();
const cors = require('cors');


var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 
}


// Middlewares
app.use(cors(corsOptions));

app.get('/', (req, res, next) => {
    res.status(200).send('app started');
})


// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening to the port ${PORT}`);
})
