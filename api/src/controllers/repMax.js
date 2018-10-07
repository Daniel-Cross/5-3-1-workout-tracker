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

  // repMax.get = (req, res) => {
  //   RepMax.findById(req.params.repMaxId, (err, repMax) => {
  //     if (err) {
  //       res.json('Something went wrong');
  //     }
  //     res.json(repMax);
  //   });
  // };
};
