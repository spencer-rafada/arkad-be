const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  savingsMoney: { type: Number, required: false, default: 0 },
  description: { type: String, required: false },
  tokenData: { type: Object, required: true },
  newUser: { type: Boolean, required: false, default: true }
});

module.exports = mongoose.model('User', userSchema);
