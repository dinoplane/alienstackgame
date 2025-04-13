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

// register the routes 
app.use('/', routes);

module.exports = app;
