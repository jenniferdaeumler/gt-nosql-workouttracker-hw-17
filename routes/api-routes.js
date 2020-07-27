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
    db.Workout.create({}).then(function (createdWorkout) {
      res.json({
        error: false,
        data: createdWorkout,
        message: "Succesfully created workout.",
      });
    });
  });


app.put("/api/workouts/:id", function (req, res) {
  db.Workout.findByIdAndUpdate(
    //first arg is the ID, second is what you want to update
    { _id: req.params.id },
    { exercises: req.body }
  )
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});




};
