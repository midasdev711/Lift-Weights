const mysql = require('mysql');          // mysql database
const keys = require('../config/keys');   // keys for accessing different strategies

const db = mysql.createConnection({
    host : keys.mySQLHost,
    user : keys.mySQLUser,
    password : keys.mySQLPassword,
    database : keys.mySQLDatabase
});

// connect to database
db.connect = (err) => {
    if(err) {
        console.log('NOT connected to DB!')
        return err;
    }
    console.log("Connected to DB!")

    // user authorization services
    require('../services/passport')(db)
    require('../routes/auth')(app)
};

module.exports = db;