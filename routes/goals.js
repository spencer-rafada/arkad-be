const routes = require('express').Router();

const goalsController = require('../controllers/goals');

routes.get('/', goalsController.getAllGoals);

module.exports = routes;
