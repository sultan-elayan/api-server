'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');
const logger = require('./middlewares/logger');
const carRoute = require('./routes/car')
// const validator = require('./middlewares/validator');

app.use(logger);

app.use(express.json());

let  start = (port)=> {
    app.listen(port, ()=> console.log(`listening to port : ${port}`))
}

app.get('/', (req,res)=>{
    res.send('im live')
})

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}