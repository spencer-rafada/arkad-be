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
  materialGoal: { type: String, required: false },
  goalTitle: { type: String, required: true },
  goalDescription: { type: String, required: false },
  goalCreateDate: { type: String, required: false },
  goalDueDate: { type: String, required: false },
  hasSavingsAccount: { type: Boolean, required: true },
  complete: { type: Boolean, required: false, default: false },
  payments: [{ type: Object, required: false }]
});

module.exports = mongoose.model('Goal', goalSchema);
