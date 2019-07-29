const mysql = require('mysql');          // mysql database
const keys = require('../config/keys');   // keys for accessing different strategies

const db = mysql.createConnection({
    host : keys.mySQLHost,
    user : keys.mySQLUser,
    password : keys.mySQLPassword,
    database : keys.mySQLDatabase
});

module.exports = db;