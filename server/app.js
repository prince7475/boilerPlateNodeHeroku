var express = require('express');
const bodyParser = require('body-parser')
var path = require('path');
var logger = require('morgan');
var usersRouter = require('./routes/users');
const Sequelize = require('sequelize')

// Creating express app
var app = express();

// Host react app
app.use(express.static(path.join(__dirname, '../client/build'))); 


//Creating routes
app.use('/users', usersRouter);


// Displaying client index html
app.get('*', (req,res) => {
    res.send(express.static(path.join(__dirname, '../client/build/index.html')))
})

//Testing Database
// @ts-ignore
const db = new Sequelize('boilerplate', 'postgres', 'password1', {
    host: 'localhost',
    dialect:'postgres'
  });
  

// @ts-ignore
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))

module.exports = app;
