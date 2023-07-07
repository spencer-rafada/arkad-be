const mongoose = require('mongoose');
const Goal = require('../models/goals');

const getAllGoals = async () => {
  return await Goal.find();
};

const getGoalById = async (id) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const foundObject = await Goal.findById(objectId);

  if (foundObject) {
    return foundObject;
  }
  return null;
};

const addGoal = async (newGoal) => {
  const result = await new Goal(newGoal);
  return await result.save();
};

module.exports = { getAllGoals, addGoal, getGoalById };
