const routes = require('express').Router();

routes.use('/goals', require('./goals'));

routes.use('/user', require('./users'));

module.exports = routes;
