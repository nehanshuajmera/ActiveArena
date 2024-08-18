import express from "express";
import {
  deleteWorkout,
  getworkout,
  getWorkouts,
  postWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";
const router = express.Router();

/* get all workouts */
router.get("/", getWorkouts);

/* get single workouts */
router.get("/:id", getworkout);

/* post a workout */
router.post("/", postWorkout);

/* delete a workout */
router.delete("/:id", deleteWorkout);

/* update a workout */
router.patch("/:id", updateWorkout);

export const workoutRoutes = router;
