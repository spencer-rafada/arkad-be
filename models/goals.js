const mongoose = require('mongoose');

// monthlyRevenue,
//       isSeparate,
//       wantMaterial,
//       materialGoal,
//       goalTitle,
//       goalDescription,
//       goalCreateDate,
//       goalDueDate: goalDueDate.$d,
//       hasSavingsAccount,

const goalSchema = mongoose.Schema({
  monthlyRevenue: { type: Number, required: true },
  isSeparate: { type: Boolean, required: true },
  wantMaterial: { type: Boolean, required: true },
  materialGoal: { type: String, required: true },
  goalTitle: { type: String, required: true },
  goalDescription: { type: String, required: false },
  goalCreateDate: { type: Object, required: false },
  goalDueDate: { type: Object, required: false },
  hasSavingsAccount: { type: Boolean, required: true }
});

module.exports = mongoose.model('Goal', goalSchema);
