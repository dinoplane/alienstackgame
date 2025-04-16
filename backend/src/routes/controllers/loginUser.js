const db = require("../../services/dbConnect.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
    const {rows} = await db.pool.query(
        `
        SELECT * FROM users
        WHERE 
        username = $1 
        AND 
        password_hash = crypt($2, password_hash)
        RETURNING user_id
        `,
        [`${req.body.username}`, `${req.body.password}`]
    )
    if (rows.length) {
        const userId = rows[0].user_id;
        const lastLogin = new Date().toISOString();
        await db.pool.query(
            `
            UPDATE users
            SET last_login = $1
            WHERE user_id = $2
            `,
            [lastLogin, userId]
        );
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
        res.status(200).json({ message: "Login successful", accessToken: token });
    } else {
        res.status(400).json({ message: "Login failed", accessToken: null });
    }
};