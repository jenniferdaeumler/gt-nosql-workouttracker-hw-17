// const router = require("express").Router();
// const Exercise = require("../models");
// const Workout = require("../models");
const db = require("../models");

module.exports = function (app) {
  //Get route to get all the workouts ("/exercise?")
  // app.get("/api/exercise", function(req, res) {
  //     db.Workout.findAll({})
  //       .then(function(dbWorkout) {
  //         res.json(dbWorkout);
  //       });
  //   });

  //

  //Get route Peter suggested
  app.get("/api/workout", function (req, res) {
    db.Workout.find({})
      .then(function (dbWorkout) {
        res.json(dbWorkout);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  //Post new workout
  app.post("/api/workout", function (req, res) {
    console.log(req.body);
    db.Workout.create(req.body).then(function (createdWorkout) {
      res.json({
        error: false,
        data: createdWorkout,
        message: "Succesfully created workout.",
      });
    });
  });
};

// /exercise will be post route
// /exercise? get route from ID findOne
// /stats get route
// update --> edit previous workout routines
