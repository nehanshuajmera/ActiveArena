import express from 'express';
const router = express.Router();

import { Workout } from '../models/workoutModel.js';

/* get all workouts */
router.get('/', (req, res) => {
  res.status(200).json({ msg: "get all workouts" });
});

/* get single workouts */
router.get('/:id', (req, res) => {
  res.status(200).json({ msg: "get single workout" });
});

/* post a workout */
router.post('/', async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const newWorkout = await Workout.create({ title, reps, load });
    res.status(201).json(newWorkout);
  }
  catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/* delete a workout */
router.delete('/:id', (req, res) => {
  res.status(200).json({ msg: "delete workout" });
});

/* update a workout */
router.patch('/:id', (req, res) => {
  res.status(200).json({ msg: "update workout" });
});

export const workoutRoutes = router;