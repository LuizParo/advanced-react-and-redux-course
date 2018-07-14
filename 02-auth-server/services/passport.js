const passport = require('passport');
const { JwtStrategy, ExtractJwt } = require('passport-jwt');

const User = require('../models/user');
const config = require('../config');