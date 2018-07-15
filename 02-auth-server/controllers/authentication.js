const jwt = require('jwt-simple');

const config = require('../config');
const User = require('../models/user');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub : user.id, iat : timestamp }, config.secret);
}

exports.signin = (req, res, next) => {
    // User has already had their email and password auth'd
    // We just need tp give them a token
};

exports.signup = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error : 'You must provide email and password' });
    }

    // See if a user with the given email exists.
    User.findOne({ email }, (err, existingUser) => {
        if (err) {
            return next(err);
        }

        // If a user with email does exist, return an error.
        if (existingUser) {
            return res.status(422).send({ error : 'Email is in use' });
        }

        // If a user which email does NOT exist, create and save user record.
        const newUser = new User({
            email,
            password
        });

        newUser.save(err => {
            if (err) {
                next(err);
            }

            // Respond to request indicating the user was created.
            res.status(201).json({ token : tokenForUser(newUser) });
        });
    });
};