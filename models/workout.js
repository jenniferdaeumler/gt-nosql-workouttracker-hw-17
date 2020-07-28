const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
        type: String,
      },
      name: {
        type: String,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      }
  }],

 //Duration total for ALL of workouts.  It kept coming back as undefined, so set to 0 automatically. 
//Add this to put route, then user will see duration of total workouts
    totalDuration: {
        type: Number,
        default: 0,
      },
    },
    {
 //Virtual to calculate properties that are not stored in MongoDB (total duration is NOT in mongoDB , just duration per exercise)
      toJSON: {
        virtuals: true,
      },
    }
  );


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
