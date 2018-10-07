const mongoose = require('mongoose');

const RepMaxSchema = new mongoose.Schema({
  militaryPress: Number,
  deadLift: Number,
  benchPress: Number,
  squat: Number
});

const RepMaxModel = mongoose.model('RepMax', RepMaxSchema);

module.exports = RepMaxModel;
