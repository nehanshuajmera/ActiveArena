import mongoose from "mongoose";
import { Workout } from "../models/workoutModel.js";

export const getWorkouts = async (req, res) => {
  try {
    const allWorkouts = await Workout.find();
    res.status(200).json(allWorkouts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getworkout = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res
        .status(404)
        .send("The resourse you're trying to access is not available");
    }
    const workout = await Workout.findById(id);
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const postWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const newWorkout = await Workout.create({
      title,
      reps,
      load,
    });
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteWorkout = async (req, res) => {
  res.status(200).json({ msg: "delete workout" });
};

export const updateWorkout = async (req, res) => {
  res.status(200).json({ msg: "update workout" });
};
