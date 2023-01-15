const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js");

// Instance of the express application
const app = express();

// PORT for the backend
const PORT = process.env.PORT || 5000;

// Env variables
require('dotenv').config();

// middleware
// To allow cross origin requests
app.use(cors());

// allow us to pass json payloads from the front end to teh backend
app.use(express.json());

app.use(express.urlencoded());

//! Root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('./auth', authRoutes)
 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


