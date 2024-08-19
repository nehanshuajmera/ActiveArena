import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from 'cors';
config();

const app = express();
const PORT = process.env.PORT;

// const corsOptions = {
//   origin: 'http://localhost:5173',
//   optionsSuccessStatus: 200,
// };

/* Middlewares */
app.use(express.json());
app.use(cors());

/* Import routes */
import { workoutRoutes } from "./routes/workoutRoute.js";

/* Routes */
app.use("/api/workouts", workoutRoutes);

/* Connect to Database */
const connect = async () => {
  await mongoose.connect(process.env.MDB_CONNECT);
  try {
    app.listen(PORT, () => {
      console.log(`App is running on http://localhost:${PORT}`);
    });

    console.log(`Connected to Database`);
  } catch (err) {
    console.error(`Error connecting to database: ${err.message}`);
    throw new Error(`Error connecting to database: ${err.message}`);
  }
};

connect();

/* Error Handling */
app.use((err, req, res, next) => {
  console.error({ error: err.message });
  res.status(500).send({ error: err.message });
});
