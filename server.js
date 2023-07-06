const express = require('express');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((error) => {
    console.log('Connection failed.');
  });

// Setting up Middlewares
app
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-Width, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS, PUT');
    next();
  });

app.use(logger('dev'));

// Get all of the routes
app.use('/', require('./routes/index'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Web server is listening at port ' + (process.env.PORT || 3000));
});
