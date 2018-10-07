const RepMax = require('../models/repMax');

exports.post = (req, res) => {
  const repMax = new RepMax({
    militaryPress: req.body.militaryPress,
    deadLift: req.body.deadLift,
    benchPress: req.body.benchPress,
    squat: req.body.squat
  });
  repMax.save((err, repMaxCreated) => {
    res.json(repMaxCreated);
  });
};
