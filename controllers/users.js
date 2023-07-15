const User = require('../models/users');
const mongoose = require('mongoose');

const addUser = async (user) => {
  const result = await new User(user);
  return await result.save();
};

const getUserByTokenSub = async (sub) => {
  const result = await User.find({ 'tokenData.sub': sub });
  if (result) {
    return result;
  }
  return null;
};

const getUserById = async (id) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const result = await User.findById(objectId);

  if (result) {
    return result;
  }
  return null;
};

const updateUser = async (newUser, id) => {
  return await User.updateOne({ _id: id }, newUser);
};

const updateUserSavings = async (price, id) => {
  return await User.updateOne({ 'tokenData.sub': id }, { $inc: { savingsMoney: price } });
};

module.exports = { addUser, getUserByTokenSub, getUserById, updateUser, updateUserSavings };
