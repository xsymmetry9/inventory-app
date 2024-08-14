const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "postgres",
    database: "inventory",
    password: "123456",
    port: 5432
})