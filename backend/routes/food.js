const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Food = mongoose.model('Food');
const { protect } = require('../middleware/auth');

router.get('/search', protect, async (req, res) => {
  try {
    const { q, category, page = 1, limit = 20 } = req.query;

    const query = {
      $or: [{ isPublic: true }, { createdBy: req.user._id }]
    };

    if (q && q.trim()) {
      query.name = { $regex: q.trim(), $options: 'i' };
    }

    if (category && category !== 'all') {
      query.category = category;
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [foods, total] = await Promise.all([
      Food.find(query).limit(parseInt(limit)).skip(skip).sort({ isPublic: -1, name: 1 }),
      Food.countDocuments(query)
    ]);

    res.json({
      success: true,
      foods,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Food search error:', error);
    res.status(500).json({ success: false, message: 'Failed to search foods.' });
  }
});

router.get('/my', protect, async (req, res) => {
  try {
    const Food = mongoose.model('Food');
    const foods = await Food.find({ createdBy: req.user._id }).sort({ createdAt: -1 });
    res.json({ success: true, foods });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch your foods.' });
  }
});

router.post('/', protect, async (req, res) => {
  try {
    const { name, brand, servingSize, servingUnit, nutrients, category } = req.body;

    if (!name || !nutrients || nutrients.calories === undefined) {
      return res.status(400).json({ success: false, message: 'Name and calories are required.' });
    }

    const Food = mongoose.model('Food');
    const food = await Food.create({
      name,
      brand,
      servingSize: servingSize || 100,
      servingUnit: servingUnit || 'g',
      nutrients,
      category: category || 'other',
      isCustom: true,
      createdBy: req.user._id,
      isPublic: false
    });

    res.status(201).json({ success: true, food });
  } catch (error) {
    console.error('Create food error:', error);
    res.status(500).json({ success: false, message: 'Failed to create food.' });
  }
});

router.get('/:id', protect, async (req, res) => {
  try {
    const Food = mongoose.model('Food');
    const food = await Food.findOne({
      _id: req.params.id,
      $or: [{ isPublic: true }, { createdBy: req.user._id }]
    });

    if (!food) {
      return res.status(404).json({ success: false, message: 'Food not found.' });
    }

    res.json({ success: true, food });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch food.' });
  }
});

router.put('/:id', protect, async (req, res) => {
  try {
    const Food = mongoose.model('Food');
    const food = await Food.findOne({ _id: req.params.id, createdBy: req.user._id });

    if (!food) {
      return res.status(404).json({ success: false, message: 'Food not found or not authorized.' });
    }

    Object.assign(food, req.body);
    await food.save();

    res.json({ success: true, food });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update food.' });
  }
});

router.delete('/:id', protect, async (req, res) => {
  try {
    const Food = mongoose.model('Food');
    const food = await Food.findOneAndDelete({ _id: req.params.id, createdBy: req.user._id });

    if (!food) {
      return res.status(404).json({ success: false, message: 'Food not found or not authorized.' });
    }

    res.json({ success: true, message: 'Food deleted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete food.' });
  }
});

module.exports = router;