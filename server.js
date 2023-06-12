const express = require('express');
const app = express();
const cors =require('cors');
require('colors');
require('dotenv').config();
const connectDB = require("./dbinit");


connectDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

//my routes


const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Welcome to API');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`.violet);
});