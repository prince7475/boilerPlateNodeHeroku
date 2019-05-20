var express = require('express');
var path = require('path');
var logger = require('morgan');

var usersRouter = require('./routes/users');

var app = express();



app.use(express.static(path.join(__dirname, '../client/build'))); 

app.use('/users', usersRouter);

app.get('*', (req,res) => {
    res.send(express.static(path.join(__dirname, '../client/build/index.html')))
})

module.exports = app;
