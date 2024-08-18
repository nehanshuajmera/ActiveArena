import express from 'express';
const router = express.Router();

/* get all workouts */ 
router.get('/', (req, res) => {
  res.status(200).json({msg: "get all workouts"});
});

/* get single workouts */ 
router.get('/:id', (req, res) => {
  res.status(200).json({msg: "get single workout"});
});

/* post a workout */ 
router.post('/', (req, res) => {
  res.status(200).json({msg: "post workout"});
});

/* delete a workout */ 
router.delete('/:id', (req, res) => {
  res.status(200).json({msg: "delete workout"});
});

/* update a workout */ 
router.patch('/:id', (req, res) => {
  res.status(200).json({msg: "update workout"});
});

export const workoutRoute = router;