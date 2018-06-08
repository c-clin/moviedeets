const passport = require('passport');

module.exports = app => {
  // kick the user into the oauth flow
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // this route comes with the google access token code so passport can handle the login
  app.get('/auth/google/callback', passport.authenticate('google'));
};
