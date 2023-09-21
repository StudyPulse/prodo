const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (you'll need to replace the connection URL)
mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes (you'll define these later)
const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
