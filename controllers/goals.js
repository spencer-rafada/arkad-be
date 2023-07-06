const Goal = require('../models/goals');

const getAllGoals = async () => {
  return await Goal.find();
};

const addGoal = async (newGoal) => {
  const result = await new Goal(newGoal);
  return await result.save();
};

module.exports = { getAllGoals, addGoal };
