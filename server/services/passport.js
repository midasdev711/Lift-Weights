const passport = require('passport');    // passport for user authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy;  // passport strategy for signing-in with Google
const keys = require('../config/keys');  // keys for accessing different strategies

// module is called with Express `app` object
module.exports = (db) => {

    // create a Google strategy for authentication
    // source: http://www.passportjs.org/docs/g/
    // source: 'Node with React: Fullstack Web Development' (Section 3) by Stephen Grider
    console.log('in Passport MODULE')
    passport.use(
        new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
        }, (accessToken, refreshToken, profile, done) => {
            console.log('accessToken: ');
            console.log(accessToken);
            console.log('refreshToken: ');
            console.log(refreshToken);
            console.log('profile: ');
            console.log(profile);
        }
    ));
};
