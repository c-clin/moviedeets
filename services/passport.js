const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// require in the user schema
const User = mongoose.model('user');

// generalize a identifying piece of code for cookies
// the user.id is the special id generated by Mongo
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// use the the id information and return the user
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

// creates a new instance of the Google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      // callback automatically called after user enters the URL
      // profile contains a special id to identify users
      User.findOne({ googleId: profile.id }).then(user => {
        if (user) {
          // user exists
          return done(null, user);
        } else {
          // user doesn't exist, create a new User instance
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
