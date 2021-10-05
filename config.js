const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'yusufPostgree21',
    database: 'demo_school',
    host: 'localhost',
    port: 5432
})

module.exports = pool;