const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// require in the user schema
const User = mongoose.model('user');

// creates a new instance of the Google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // callback automatically called after user enters the URL
      // profile contains a special id to identify users

      //
      new User({ googleId: profile.id }).save();
    }
  )
);
