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

module.exports = { addUser, getUserByTokenSub, getUserById };
