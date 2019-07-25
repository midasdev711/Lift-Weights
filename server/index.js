const express = require('express');     // express framework
const passport = require('passport');   // passport for user authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy;  // passport strategy for signing-in with Google
const keys = require('./config/keys');  // keys for accessing different strategies
const mysql = require('mysql');         // mysql database
const cors = require('cors');           // cross-origin requirements middleware
const app = express();                  // running express application object


// create a Google strategy for authentication
// source: http://www.passportjs.org/docs/g/
// source: 'Node with React: Fullstack Web Development' (Section 3) by Stepehn Grider
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        passReqToCallback: true
    }, (accessToken, refreshToken, profile, done) => {
        console.log('accessToken: ');
        console.log(accessToken);
        console.log('refreshToken: ');
        console.log(refreshToken);
        console.log('profile: ');
        console.log(profile);
    }
));

// user is passed over to passport for authentication
app.get(
    '/auth/google',
    passport.authenticate(
        'google', { 
        scope: ['profile', 'email'] 
    })
);

app.get(
    '/auth/google/callback', 
    passport.authenticate('google', { 
        failureRedirect: '/login' 
    }),
    function(req, res) {
        res.redirect('/');
    }
);

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

    const q_select = `SELECT username, id FROM members WHERE username='${username}' AND password='${password}'`;
    db.query(q_select, (err, results)  => {
        if(err) {
            return res.error(err);
        } 
        if (results.length > 0) {
            // redirect to profile page if a valid user was found
            return res.json({
                data: {
                    id: results[0].id,
                    member: results[0].username
                }
            });
            return res.redirect('/profile');
        } else {
            // otherwise, redirect to login page if credentials were invalid
            return res.send('Invalid Credentials');
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
            return res.send('Failed to register user')
        } else {
            return res.redirect('/profile');
        }
    });
});

// request handler for '/profile' page
app.get("/profile", (req, res) => {
    res.send("hello from profile page");
    res.status("202");
});

// listen on specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT);