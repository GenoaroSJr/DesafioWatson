require('dotenv').config();
const mysql = require('mysql');

function getConnection() {
    var con = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "comments"
    });
    return con;
}

module.exports.getConnection = getConnection;