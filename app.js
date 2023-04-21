var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
const itemsRouter = require('./routes/items');

var app = express();

// const mongoUrl = 'mongodb+srv://daniel:danieldanieldaniel@cluster0.qowscnn.mongodb.net/clase?retryWrites=true&w=majority';

// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(x => {
//         console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//     })
//     .catch(err => {
//         console.error('Error connecting to mongo', err)
//     });


const myLogger = (req, res, next) => {
    console.log(`method: ${req.method}, url: ${req.url}, date: ${(new Date()).toLocaleString()}`);

    next()
}

// app.use(myLogger)

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', indexRouter);
app.use('/items', itemsRouter);

module.exports = app;
