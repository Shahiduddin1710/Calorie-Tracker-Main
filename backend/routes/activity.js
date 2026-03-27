const express = require('express');
const router = express.Router();
const ActivityLog = require('../models/ActivityLog');
const { protect } = require('../middleware/auth');

const CALORIE_RATES = {
  running: 10,
  walking: 5,
  cardio: 8,
  swimming: 7,
  cycling: 6,
  custom: 5
};

const calculateCaloriesBurned = (activityType, duration, distance) => {
 if (distance && distance > 0) {
  if (activityType === 'running') return Math.round(distance * 60);
  if (activityType === 'walking') return Math.round(distance * 40);
  if (activityType === 'cardio') return Math.round(distance * 50);
  if (activityType === 'swimming') return Math.round(distance * 300);
  if (activityType === 'cycling') return Math.round(distance * 40);
}

  const rate = CALORIE_RATES[activityType] || 5;
  return Math.round(rate * duration);
};

router.get('/stats/weekly', protect, async (req, res) => {
  try {
    const { startDate } = req.query;
    const start = startDate || new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const end = new Date().toISOString().split('T')[0];

    const logs = await ActivityLog.find({
      user: req.user._id,
      date: { $gte: start, $lte: end }
    });

    const dailyStats = {};
    logs.forEach(log => {
      if (!dailyStats[log.date]) {
        dailyStats[log.date] = { caloriesBurned: 0, duration: 0 };
      }
      dailyStats[log.date].caloriesBurned += log.caloriesBurned;
      dailyStats[log.date].duration += log.duration;
    });

    res.json({ success: true, stats: dailyStats });
  } catch (error) {
    console.error('Get activity stats error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch activity stats.' });
  }
});

router.get('/:date', protect, async (req, res) => {
  try {
    const { date } = req.params;
    const logs = await ActivityLog.find({ user: req.user._id, date }).sort({ createdAt: 1 });
    const totalBurned = logs.reduce((sum, log) => sum + log.caloriesBurned, 0);
    res.json({ success: true, logs, totalBurned });
  } catch (error) {
    console.error('Get activity logs error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch activity logs.' });
  }
});

router.post('/', protect, async (req, res) => {
  try {
    const { activityType, customName, duration, distance, date } = req.body;

    if (!activityType || !duration || !date) {
      return res.status(400).json({ success: false, message: 'activityType, duration, and date are required.' });
    }

    if (activityType === 'custom' && !customName?.trim()) {
      return res.status(400).json({ success: false, message: 'Custom activity name is required.' });
    }

    const caloriesBurned = calculateCaloriesBurned(activityType, duration, distance);

    const log = await ActivityLog.create({
      user: req.user._id,
      activityType,
      customName: activityType === 'custom' ? customName.trim() : '',
      duration,
      distance: distance || null,
      caloriesBurned,
      date
    });

    res.status(201).json({ success: true, log });
  } catch (error) {
    console.error('Add activity error:', error);
    res.status(500).json({ success: false, message: 'Failed to log activity.' });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const log = await ActivityLog.findOneAndDelete({ _id: req.params.id, user: req.user._id });

    if (!log) {
      return res.status(404).json({ success: false, message: 'Activity log not found.' });
    }

    res.json({ success: true, message: 'Activity deleted.' });
  } catch (error) {
    console.error('Delete activity error:', error);
    res.status(500).json({ success: false, message: 'Failed to delete activity.' });
  }
});

module.exports = router;