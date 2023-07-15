const routes = require('express').Router();

const goalsController = require('../controllers/goals');
const userController = require('../controllers/users');

routes.get('/', async (req, res, next) => {
  try {
    const goals = await goalsController.getAllGoals();
    return res.status(200).json({ message: 'Fetched successfully', data: goals });
  } catch (e) {
    return res.status(400).json({ message: 'Failed to fetch goals', error: e.message });
  }
});

routes.get('/user/:id', async (req, res, next) => {
  try {
    const goal = await goalsController.getGoalByUserId(req.params.id);
    if (goal) return res.status(200).send({ message: 'Goals fetched successfully', data: goal });
    else return res.status(400).json({ message: 'Failed to fetch goals', error: e.message });
  } catch (e) {
    return res.status(400).json({ message: 'Server failed to fetch goals', error: e.message });
  }
});

routes.get('/:id', async (req, res, next) => {
  try {
    const goal = await goalsController.getGoalById(req.params.id);
    if (goal) return res.status(200).send({ message: 'Fetched successfully', data: goal });
    else return res.status(400).json({ message: 'Failed to fetch goals', error: e.message });
  } catch (e) {
    return res.status(400).json({ message: 'Server failed to fetch goals', error: e.message });
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
    console.log(e);
    res.status(404).json({ message: 'Server failed to add goal', error: e.message });
  }
});

routes.put('/:id', async (req, res, next) => {
  try {
    const result = await goalsController.updateGoal(req.body, req.params.id);
    const addSavings = await userController.updateUserSavings(req.body.savings, req.body.userId);
    if (result.modifiedCount > 0) {
      res.status(204).json({ message: 'Updated goal successfully' });
    } else {
      res.status(404).json({ message: 'Failed to update goal' });
    }
  } catch (e) {
    res.status(404).json({ message: 'Server failed to update goal', error: e.message });
  }
});

module.exports = routes;
