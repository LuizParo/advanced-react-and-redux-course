const User = require('../models/user');

exports.signup = (req, res, next) => {
    const { email, password } = req.body;

    // See if a user with the given email exists.
    User.findOne({ email }, (err, existingUser) => {

    });

    // If a user with email does exist, return an error.

    // If a user which email does NOT exist, create and save user record.

    // Respond to request indicating the user was created.
};