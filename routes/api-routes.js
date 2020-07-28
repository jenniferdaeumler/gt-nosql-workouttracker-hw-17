// const router = require("express").Router();
// const Exercise = require("../models");
// const Workout = require("../models");
const db = require("../models");

module.exports = function (app) {
  //Get route to display workouts on root
  app.get("/api/workouts", function (req, res) {
    // find the workout with the latest date
    db.Workout.find({})
      .then(function (dbWorkout) {
        // calculate total duration of all exercises
        // const totalDuration = ...
        // res.json {...dbWorkout, totalDuration}
        res.json(dbWorkout);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  //Post new workout
  app.post("/api/workouts", function (req, res) {
    db.Workout.create({}).then(function (createdWorkout) {
      res.json(createdWorkout);
    });
  });

  //Update the Last Workout card on root
  app.put("/api/workouts/:id", function (req, res) {
    db.Workout.findByIdAndUpdate(
      //first arg is the ID, second is what you want to update
      req.params.id,
      { $push: { exercises: req.body },
      $inc: { totalDuration: req.body.duration },
     },
      { new: true }
    )
      .then(function (lastWorkoutInfo) {
        res.json(lastWorkoutInfo);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  //Stats page api-route
  app.get("/api/workouts/range", function (req, res) {
    db.Workout.find({})
      .limit(7)
      .then(function (dbStats) {
        res.json(dbStats);
      })
      .catch((error) => {
        res.json(error);
      });
  });
};
