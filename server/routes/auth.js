const passport = require('passport');

// authenticate a user through passport
// source: http://www.passportjs.org/docs/g/
// source: 'Node with React: Fullstack Web Development' (Section 3) by Stephen Grider
// user is passed over to passport for authentication

// module is called with Express `app` object
module.exports = (app) => {

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
};