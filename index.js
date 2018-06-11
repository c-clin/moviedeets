const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/User');
require('./models/Movie');
require('./services/passport');

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error));

// app is the underline running express server
const app = express();

app.use(bodyParser.json());

// tell express to use cookies
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // cookies expire in 30 days
    keys: [keys.cookieKey]
  })
);

// tell passport to use the cookies
app.use(passport.initialize());
app.use(passport.session());

// call the authRoutes file with app
require('./routes/authRoutes')(app);
require('./routes/movieRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
