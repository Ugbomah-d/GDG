const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDatbase = require('./db/cloud');
const app = express();
const PORT = 3000;
const dotenv = require('dotenv').config();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // Allows parsing JSON bodies in requests

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(PORT, () => {
  connectDatbase(process.env.DATABASE_URL)
  console.log(`Server is running on http://localhost:${PORT}`);
});
