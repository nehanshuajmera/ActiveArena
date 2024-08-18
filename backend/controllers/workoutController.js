import mongoose from "mongoose";
import { Workout } from "../models/workoutModel.js";

/* get all workouts */
export const getWorkouts = async (req, res) => {
  try {
    const allWorkouts = await Workout.find();
    res.status(200).json(allWorkouts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* get single workouts */
export const getworkout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({
        error: "The resource you're trying to access is not available",
      });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
      res.status(404).json({
        error: "The resource you're trying to access is not available",
      });
    }
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* post a workout */
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

/* delete a workout */
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({
        error: "The resource you're trying to access is not available",
      });
    }

    const deleteWorkout = await Workout.findByIdAndDelete({ _id: id });

    if (!deleteWorkout) {
      res.status(404).json({
        error: "The resource you're trying to access is not available",
      });
    }
    res.status(200).json(deleteWorkout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* update a workout */
export const updateWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({
        error: "The resource you're trying to access is not available",
      });
    }

    const updateWorkout = await Workout.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!updateWorkout) {
      res.status(404).json({
        error: "The resource you're trying to access is not available",
      });
    }
    res.status(200).json(updateWorkout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
