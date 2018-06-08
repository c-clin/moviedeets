const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String
});

// add the model to mongoose: name of collection, schema
mongoose.model('user', userSchema);
