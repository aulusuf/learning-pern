// const { Pool } = require('pg');

const { addListener } = require("nodemon");

// const pool = new Pool({
//     user: 'postgres',
//     password: 'postgres',
//     database: 'demo_school',
//     host: 'localhost',
//     port: 5432
// });

// module.exports = pool;

module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "postgres",
  DB: "demo_school",
  DIALECT: "postgres",
};
