const express = require('express');  // express framework
const mysql = require('mysql');      // mysql database
const cors = require('cors');        // cross-origin requirements middleware
const app = express();               // running express application object

// create a database connection
var db = mysql.createConnection({
    host : 'localhost',
    user : 'trainer',
    password : 'session',
    database : 'gym'
});

// connected to database
db.connect(err => {
    if(err) {
        return err;
    }
    console.log("Connected to DB!")
});

// relax cross-origin policy to account for two servers 
// using different ports while in development
app.use(cors());                                

// request handler for '/' page that redirects to '/login' page
app.get("/", (req, res) => {
    res.status(302);
    res.set({
        'Content-Type':'text/html',
        'Location':'/login'
    });
    res.send('go to /login page');
    res.end();
});

// request handler for '/login' page
app.get("/login", (req, res) => {
    res.status(200);
    const q = 'SELECT * FROM members';
    db.query(q, (err, results)  => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    });

    // res.render("/login"); // TODO
});

// listen on specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT);