const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Movie = mongoose.model('movie');

module.exports = app => {
  app.get('/api/my-list', requireLogin, (req, res) => {
    Movie.find({ _user: req.user.id }).then(movie => res.send(movie));
  });

  app.post('/api/add-movie', requireLogin, (req, res) => {
    const { title, poster, releaseDate, cast, summary } = req.body;

    const movie = new Movie({
      title,
      poster,
      releaseDate,
      cast,
      summary,
      _user: req.user.id,
      date: Date.now()
    });

    try {
      movie.save();
      res.send();
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
