const bcrypt = require('bcrypt');
const db = require("../../services/dbConnect.js");

exports.createUser = async (req, res) => {
    const {rows} = await db.pool.query(
        `
        INSERT INTO users(username, password_hash)
        VALUES (
        $1,
        crypt($2,gen_salt('bf'))
        )
        RETURNING username 
        `,
        [`${req.body.username}`, `${req.body.password}`]
    )
    if (rows.length) {
        res.status(201).json({ message: "User created successfully" });
    } else {
        res.status(400).json({ message: "User creation failed" });
    }
};