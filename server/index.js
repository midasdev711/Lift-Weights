const express = require('express');  // express framework
const mysql = require('mysql');      // mysql database
const cors = require('cors');        // cross-origin requirements middleware
const session = require('express-session'); // allows for session creation
const keys = require('./config/keys');      // key storage

// running express application object
const app = express();               

// relax cross-origin policy to account for two servers 
// using different ports while in development
app.use(cors());                                

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

// setup session creation
app.use(session({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: true
}));

// request handler for '/' page that redirects to '/login' page
app.get("/", (_, res) => {
    res.status(302);
    res.set({
        'Content-Type':'text/html',
        'Location':'/login'
    });
    res.end();
});

// request handler for '/login' page
app.get("/login", (req, res) => {
    res.status(202);
});

// request handler for '/login/match' page
app.get("/login/match", (req, res) => {
    const { username, password } = req.query;

    // check if user exists in database
    const q_select = `SELECT username, id FROM members WHERE username='${username}' AND password='${password}'`;

    db.query(q_select, (err, results)  => {
        if(err) {
            return res.status(500).error(err);
        } 
        if (results.length > 0) {
            req.session.id = results[0].id;
            req.session.user = results[0].username;

            return res.status(200).json({
                data: {
                    id: results[0].id,
                    member: results[0].username
                }
            });

        } else {
            // otherwise, redirect to login page if credentials were invalid
            return res.status(404).send('Invalid Credentials');
        }
    });
});

// request handler for '/register' page
app.get("/register", (_, res) => {
    res.status(202);
});

// add a user
app.get("/register/add", (req, res) => {
    const { username, email, password } = req.query;

    const q_insert_user = `INSERT INTO members (username, email, password) \
                           VALUES('${username}', '${email}', '${password}')`;
                           
    db.query(q_insert_user, (err, results)  => {
        if(err) {
            return res.status(404).send('Failed to register user')
        } else {

            // confirm successful add by grabbing user details from new entry to db
            const q_select = `SELECT username, id FROM members WHERE username='${username}' AND password='${password}'`;

            db.query(q_select, (err, results)  => {
                if(err) {
                    return res.status(500).error(err);
                } 
                if (results.length > 0) {
                    req.session.id = results[0].id;
                    req.session.user = results[0].username;

                    return res.status(200).json({
                        data: {
                            id: results[0].id,
                            member: results[0].username
                        }
                    });

                } else {
                    // otherwise, redirect to login page if credentials were invalid
                    return res.status(404).send('User was not successfully registered');
                }
            });
        }
    });
    return res.status(404).send('Registration failed')
});

// request handler for '/profile' page
app.get("/profile", (req, res) => {
    console.log('redirected to profile')
    console.log('user: ' + req.session.user)

    if (!req.session.user) {
        return res.status(401).send();
    }

    return res.status(200).send("hello from profile page");
});

// listen on specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT);