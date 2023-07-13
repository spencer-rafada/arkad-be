const routes = require('express').Router();
const userController = require('../controllers/users');

routes.post('/', async (req, res, next) => {
  try {
    const fetchedUser = await userController.getUserByTokenSub(req.body.tokenData.sub);
    if (fetchedUser.length > 0) {
      return res
        .status(201)
        .json({ message: 'User already in database', userId: fetchedUser[0]._id });
    }

    const result = await userController.addUser(req.body);
    if (result) {
      res.status(200).json({ message: 'User added successfully', userId: result._id });
    } else {
      res.status(404).json({ message: 'Failed to add user' });
    }
  } catch (e) {
    return res.status(400).json({ message: 'Server failed to fetch goals', error: e.message });
  }
});

routes.get('/:id', async (req, res, next) => {
  try {
    const fetchedUser = await userController.getUserById(req.params.id);
    if (fetchedUser)
      return res.status(200).send({ message: 'Fetched successfully', data: fetchedUser });
    else return res.status(400).json({ message: 'Failed to fetch user', error: e.message });
  } catch (e) {
    return res.status(400).json({ message: 'Server failed to fetch user', error: e.message });
  }
});

module.exports = routes;
