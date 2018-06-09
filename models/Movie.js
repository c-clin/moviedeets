const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  poster: String,
  releaseDate: String,
  summary: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  date: Date
});

mongoose.model('movie', movieSchema);
