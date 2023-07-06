const routes = require('express').Router();

const goalsController = require('../controllers/goals');

routes.get('/', async (req, res, next) => {
  try {
    const goals = await goalsController.getAllGoals();
    return res.status(200).json({ message: 'Fetched successfully', data: goals });
  } catch (e) {
    return res.status(400).json({ message: 'Failed to fetch goals', error: e.message });
  }
});

routes.post('/', async (req, res, next) => {
  try {
    const result = await goalsController.addGoal(req.body);
    if (result) {
      res.status(200).json({ message: 'Goal added succcessfuly' });
    } else {
      res.status(404).json({ message: 'Failed to add goal' });
    }
  } catch (e) {
    res.status(404).json({ message: 'Server failed to add goal' });
  }
});

module.exports = routes;
