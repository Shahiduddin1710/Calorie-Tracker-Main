const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  activityType: {
    type: String,
    enum: ['running', 'walking', 'cardio', 'swimming', 'cycling', 'custom'],
    required: true
  },
  customName: {
    type: String,
    trim: true,
    default: ''
  },
  duration: {
    type: Number,
    required: true,
    min: 1
  },
  distance: {
    type: Number,
    default: null
  },
  caloriesBurned: {
    type: Number,
    required: true,
    min: 0
  },
  date: {
    type: String,
    required: true
  }
}, { timestamps: true });

activityLogSchema.index({ user: 1, date: 1 });

module.exports = mongoose.model('ActivityLog', activityLogSchema);