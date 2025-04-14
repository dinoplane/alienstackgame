const bcrypt = require('bcrypt');
const db = require("../../services/dbConnect.js");

exports.createUser = (req, res) => {
    // create the user here...
    const saltRounds = 10;
    const { username, password } = req.body;
    console.log(username, password);

    if (username.length < 4) {
        return res.status(400).json({ message: "Username must be at least 4 characters long" });
    }
    if (username.length > 20) {
        return res.status(400).json({ message: "Username must be at most 20 characters long" });
    }

    if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }
    if (password.length > 72) {
        return res.status(400).json({ message: "Password must be at most 72 characters long" });
    }
    
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.
            console.log(hash.length);
            db.pool.connect((err, client) => {
                const insertQuery = `INSERT INTO users (username, password_hash) VALUES ($1, $2)`;
                const values = [username, hash];
                client.query(insertQuery, values)
                .then( (output) => {
                    res.status(201).json({ message: "User created successfully" });
                })
                .catch((err) => {
                    console.error(err);
                    res.status(500).json({ message: "Error creating user" });
                })
            });
        });
    });

    // const values = [req.body.username, req.body.password_hash];

};