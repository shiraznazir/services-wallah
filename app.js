const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Set up multer storage (you can configure it to save files, but here it's just memory storage)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

mongoose.connect('mongodb://localhost:27017/service-walah-v1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Route to handle customer form submission
app.use('/api/v1/enquiry', require('./routes/enquiry'));

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

module.exports = app;