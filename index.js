const express = require('express');
const passportConfig = require('./services/passport');

// app is the underline running express server
const app = express();

// call the authRoutes file with app
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
