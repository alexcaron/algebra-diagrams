const mongoose = require('mongoose');
const db = require('../index.js');

const equationSchema = mongoose.Schema({
  userId: String,
  equation: String,
  next: String
});

const Equation = mongoose.model('Equation', equationSchema);

module.exports = Equation;