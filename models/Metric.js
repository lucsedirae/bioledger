const mongoose = require('mongoose');

const MetricSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  weight: {
    type: Number,
    required: true,
  },
  systolic: {
    type: Number,
    required: true,
  },
  diastolic: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('metric', MetricSchema);
