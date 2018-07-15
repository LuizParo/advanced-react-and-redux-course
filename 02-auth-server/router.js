const Authentication = require('./controllers/authentication');

const passportService = require('./services/passport');

const requireAuth = passportService.authenticate('jwt', { session : false });
const requireSignin = passportService.authenticate('local', { session : false });

module.exports = app => {
    app.get('/', requireAuth, (_, res) => res.send({ hi : 'there' }));

    app.post('/signin', requireSignin, Authentication.signin);

    app.post('/signup', Authentication.signup);
};