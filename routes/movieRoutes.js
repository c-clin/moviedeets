const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Movie = mongoose.model('movie');

module.exports = app => {
  app.post('/api/add-movie', requireLogin, (req, res) => {
    const { title, poster, year } = req.body;

    console.log('req body: ', title, poster, year);

    const movie = new Movie({
      title,
      poster,
      year,
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
