const routes = require('express').Router();

routes.use('/goals', require('./goals'));

module.exports = routes;
