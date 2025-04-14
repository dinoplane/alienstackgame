
const pg = require("pg");
require('dotenv').config(); // Load environment variables from .env file

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("connected to the Database");
});

const createTables = () => { // TODO Change this later, the passowrd should be as long as possible
  const userTableQuery = `CREATE TABLE IF NOT EXISTS
    users(
      user_id SERIAL PRIMARY KEY,
      username VARCHAR(128) NOT NULL,
      password_hash VARCHAR(62) NOT NULL,
      last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

  // const objectTableQuery = `CREATE TABLE IF NOT EXISTS
  //   objects(
  //     object_id SERIAL PRIMARY KEY,
  //     name VARCHAR(128) NOT NULL,
  //     description TEXT,
  //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  //   )`;

  pool
    .query(userTableQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

pool.on("remove", () => {
  console.log("client removed");
  process.exit(0);
});

//export pool and createTables to be accessible from anywhere within the application
module.exports = {
  createTables,
  pool,
};

require("make-runnable");