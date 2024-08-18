import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

const app = express();
const PORT = process.env.PORT;

/* Middlewares */ 
app.use(express.json());

/* Routes */



/* Connect to Database */
const connect = async () => {
  await mongoose.connect(process.env.MDB_CONNECT);
  try {
    app.listen(PORT, () => {
      console.log(`App is running on http://localhost:${PORT}`);
    });

    console.log(`Connected to Database`)
  }
  catch (err) {
     console.error(`Error connecting to database: ${err.message}`);
     throw new Error(`Error connecting to database: ${err.message}`);
  }
}

connect();

/* Error Handling */ 
app.use((err, req, res, next) => {
  console.error({ msg: err.msg });
  res.status(500).send({ msg: err.message });
});