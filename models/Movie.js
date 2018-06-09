const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  poster: String,
  year: Number,
  date: Date
});

mongoose.model('movie', movieSchema);
