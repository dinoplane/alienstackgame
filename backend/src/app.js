// server/index.js

const express = require("express");
const db = require('./services/dbConnect.js');

// import the routes file
const routes = require("./routes/routes")
const app = express();

// body parser configuration
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors({
    origin: 'localhost:3000', // allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));



// register the routes 
app.use('/', routes);



module.exports = app;
