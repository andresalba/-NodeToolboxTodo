const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Start de project
// mongod
// nodemon app

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/express-mongo', { useNewUrlParser: true, useUnifiedTopology: true })

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/todo'));

// Server config
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});