const { createPool } = require ("mysql");
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "mjaccounting",
});

pool.getConnection((err) => {
    if (err) {
        console.log("Error connecting to database.");
    } else {
        console.log("Connected to database.");
    }
});

module.exports = pool;