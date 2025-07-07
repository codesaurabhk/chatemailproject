// import express from 'express';
// import cors from 'cors';
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const emailrouter = require("./src/routes/emailroutes");





const app = express();
const PORT = 5000;

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

// email api
app.use("/api/email", emailrouter)
app.use('/uploads', express.static('uploads'));


app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});