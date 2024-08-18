import express from 'express';

const app = express();
let PORT 

/* Routes */
app.get('/', (req, res) => {
  res.status(200).json("hello")
})

app.listen(PORT = 4000, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
  console.error({msg: err.msg});
  res.status(500).send({msg: err.message});
});