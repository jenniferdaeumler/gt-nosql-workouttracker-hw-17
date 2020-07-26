const router = require("express").Router();
// const Exercise = require("../models");
// const Workout = require("../models");
const db = require("../models");

module.exports = function(app) {
//Get route to get all the workouts ("/exercise?")
    // app.get("/api/workout/", function(req, res) {
    //     db.Post.findAll({})
    //       .then(function(dbPost) {
    //         res.json(dbPost);
    //       });
    //   });

    //Post new workout 
    router.post("/api/exercise", function(req, res) {
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