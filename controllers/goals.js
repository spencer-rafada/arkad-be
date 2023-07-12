const Goal = require('../models/goals');
const mongoose = require('mongoose');

const utils = require('../utils/index');

const getAllGoals = async () => {
  return await Goal.find();
};

const getGoalByUserId = async (id) => {
  console.log(id);
  const foundObject = await Goal.find({ userId: id });

  if (foundObject) {
    return foundObject;
  }
  return null;
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
  // Add subGoals to object
  const subGoals = utils.calculateBiWeeksToTarget(newGoal);
  const goal = { ...newGoal, subGoals: subGoals };
  const result = await new Goal(goal);
  return await result.save();
};

const updateGoal = async (newGoal, id) => {
  return await Goal.updateOne({ _id: id }, newGoal);
};

module.exports = { getAllGoals, addGoal, getGoalByUserId, getGoalById, updateGoal };
