
const express = require('express');

const router = express.Router();

require("dotenv").config();
const db = require("../services/dbConnect.js");

const test = require("./controllers/test.js");
const createUser = require("./controllers/createUser.js");

router.get("/api", test.test);

router.post("/create-user", (req, res) => {createUser.createUser(req, res);});

// router.post("/login", (req, res) => {createUser.login(req, res);});



module.exports = router;