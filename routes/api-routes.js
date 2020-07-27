// const router = require("express").Router();
// const Exercise = require("../models");
// const Workout = require("../models");
const db = require("../models");

module.exports = function (app) {

  //Get route Peter suggested
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({})
      .then(function (dbWorkout) {
        res.json(dbWorkout);
      })
      .catch((error) => {
        res.json(error);
      });
  });



  //Post new workout
  app.post("/api/workouts", function (req, res) {
    db.Workout.create(req.body).then(function (createdWorkout) {
      res.json({
        error: false,
        data: createdWorkout,
        message: "Succesfully created workout.",
      });
    });
  });



  //Update the Last Workout card on root
  app.put("/api/workouts/:id", function (req, res) {
    db.Workout.findByIdAndUpdate(
      //first arg is the ID, second is what you want to update
      { _id: req.params.id },
      { exercises: req.body }
    )
      .then(function (lastWorkoutInfo) {
        res.json(lastWorkoutInfo);
      })
      .catch(function (err) {
        res.json(err);
      });


    //Stats page api-route
    app.get("/api/workouts/range", function (req, res) {
      db.Workout.find({})
        .then(function (dbStats) {
          res.json(dbStats);
        })
        .catch((error) => {
          res.json(error);
        });
    });
  });


};
