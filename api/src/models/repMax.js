const mongoose = require('mongoose');

const RepMaxSchema = new mongoose.Schema({
  militaryPress: { type: Number, require: true },
  deadLift: { type: Number, require: true },
  militaryPress: { type: Number, require: true },
  squat: { type: Number, require: true }
});

const RepMaxModel = mongoose.model('RepMax', RepMaxSchema);

module.exports = RepMaxModel;
