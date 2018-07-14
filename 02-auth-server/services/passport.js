const passport = require('passport');
const { JwtStrategy, ExtractJwt } = require('passport-jwt');

const User = require('../models/user');
const config = require('../config');

// Setup options for JWT Strategy
const jwtOptions =  {
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    secretOrKey : config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    // See if the user ID in the payload exists in our database
    // If it does, call 'done' with that user
    // otherwise, call 'done' without a user object
    User.findById(payload.sub, (err, user) => {
        if (err) {
            return done(err, false);
        }

        return user ? done(null, user) : done(null, false);
    });
});

// Tell passport to use this strategy
passport.use(jwtLogin);