// const router = require("express").Router();
// const Exercise = require("../models");
// const Workout = require("../models");
const db = require("../models");

module.exports = function(app) {
//Get route to get all the workouts ("/exercise?")
    app.get("/api/exercise", function(req, res) {
        db.Workout.findAll({})
          .then(function(dbWorkout) {
            res.json(dbWorkout);
          });
      });

    //Post new workout 
    app.post("/api/exercise", function(req, res) {
        console.log(req.body);
        db.Exercise.create(req.body)
          .then(function(createdExercise) {
            res.json({
                error: false,
                data: createdExercise,
                message: "Succesfully created exercise."
            });
          });
      });
};


// /exercise will be post route 
// /exercise? get route from ID findOne 
// /stats get route 
// update --> edit previous workout routines