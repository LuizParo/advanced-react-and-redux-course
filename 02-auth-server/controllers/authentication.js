const User = require('../models/user');

exports.signup = (req, res, next) => {
    const { email, password } = req.body;

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
            res.status(201).json({ success : true });
        });
    });
};