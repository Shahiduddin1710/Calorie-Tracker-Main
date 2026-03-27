const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Too many requests, please try again later.' }
});
app.use('/api/', limiter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');

    require('./models/User');
    require('./models/Food');
    require('./models/FoodLog');
    require('./models/ActivityLog');

    const authRoutes = require('./routes/auth');
    const foodRoutes = require('./routes/food');
    const logRoutes = require('./routes/log');
    const userRoutes = require('./routes/user');
    const activityRoutes = require('./routes/activity');

    app.use('/api/auth', authRoutes);
    app.use('/api/food', foodRoutes);
    app.use('/api/log', logRoutes);
    app.use('/api/user', userRoutes);
    app.use('/api/activity', activityRoutes);

    app.get('/api/health', (req, res) => {
      res.json({ success: true, message: 'Server is running', timestamp: new Date() });
    });

    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ success: false, message: 'Something went wrong on our end.' });
    });

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });